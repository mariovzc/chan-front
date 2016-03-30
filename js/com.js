function Com() {
	var x = this;
	x.base = 'http://chanapi.herokuapp.com/';

	x.save = function(objeto, objetoAGuardar, callback) {
		$.ajax({
			type: "POST",
			//url: x.base+x.clinica+"/"+objeto,
			url: x.base + objeto,
			contentType: "application/json; charset=UTF8",
			dataType: "json",
			data: JSON.stringify(objetoAGuardar),
			async: false,
			success: function(result) {
				callback(result);
			},
			error: function(xhr, ajaxOptions, thrownError) {
				if (xhr.status == 404) {
					x.error404();
					return "error";
				} else if (xhr.status == 500) {
					x.error500();
					return "error";
				} else if (xhr.status == 401) {
					x.error401();
					return "error";
				}
			}
		});
	};

	x.edit = function(objeto, detalle, objetoAGuardar, callback) {
		$.ajax({
			type: "PUT",
			url: x.base + objeto + "/" + detalle,
			contentType: "application/json; charset=UTF8",
			dataType: "json",
			data: JSON.stringify(objetoAGuardar),
			async: false,
			success: function(result) {
				callback(result);
			},
			error: function(xhr, ajaxOptions, thrownError) {
				if (xhr.status == 404) {
					x.error404();
					return "error";
				} else if (xhr.status == 500) {
					x.error500();
					return "error";
				} else if (xhr.status == 401) {
					x.error401();
					return "error";
				}
			}
		});
	};

	x.del = function(objeto, detalle, callback) {
		$.ajax({
			type: "DELETE",
			url: x.base + objeto + "/" + detalle,
			dataType: 'json',
			async: false,
			success: function(result) {
				callback(result);
			},
			error: function(xhr, ajaxOptions, thrownError) {
				if (xhr.status == 404) {
					x.error404();
					return "error";
				} else if (xhr.status == 500) {
					x.error500();
					return "error";
				} else if (xhr.status == 401) {
					x.error401();
					return "error";
				}
			}
		});
	};

	x.get = function(objeto, detalle, callback) {
		$.ajax({
			type: "GET",
			url: x.base + objeto + "/" + detalle,
			dataType: 'json',
			async: false,
			success: function(result) {
				callback(result);
			},
			error: function(xhr, ajaxOptions, thrownError) {
				if (xhr.status == 404) {
					callback(xhr);
				} else if (xhr.status == 500) {
					x.error500();
					return "error";
				} else if (xhr.status == 401) {
					x.error401();
					return "error";
				}
			}
		});
	};

	x.list = function(objeto, id, callback) {
		$.ajax({
			type: "GET",
			url: x.base + objeto + "/" + id,
			dataType: 'json',
			async: false,
			timeout: 60000,
			beforeSend: function(xhr) {
				xhr.setRequestHeader('Authorization', x.authorization);
			},
			success: function(result) {
				callback(result);
			},
			error: function(xhr, ajaxOptions, thrownError) {
				if (xhr.status == 404) {
					x.error404();
					return "error";
				} else if (xhr.status == 500) {
					x.error500();
					return "error";
				} else if (xhr.status == 401) {
					x.error401();
					return "error";
				}
			}
		});
	};

	x.error404 = function() {
		//alert("Que verguenza tan grande, pero no lo reconocemos, esta seguro que puso las credenciales correctas?");
		alerta.error("Datos Incorrectos",
			"Revise que toda la informacion de los campos sea correcta");
	};
	x.error500 = function() {
		alerta.error("Error", "Algo Salio Mal ,intentalo de nuevo");
		//alert("Santas Cachuchas batman, algo salio mal, por favor intente de nuevo!");
	};
	x.error401 = function() {
		alerta.error("Error", "Error Davivienda, usted esta en el lugar equivocado.");
	};
}

var com = new Com();
