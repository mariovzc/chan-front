== README

4Chan Copy Front version.

== Chan-Api:

https://github.com/mariovzc/chan-front

=== Coming Soon
 * Jquery Version
 * Angular Version
 * React Version


=== Routes
  * get 'boards', to: 'boards#all'  -list all the boards - listar todas las boards

  * get '/:name', to: 'post#all'   -list all the post - listar todos los post -> params board name

  * get '/:board/:post', to: 'comments#list' -list all the comments - listar todos los comentarios  -> params board name, and post id
  
  * get '/:board/:post/:id', to: 'comments#show' -get the current comment - obtener el comentario -> params board name, post id and comment id

  * post '/:name', to: 'post#create' -create a new post - crear un nuevo post -> params url: board name, body : title, user_ip
  * post '/:board/:post', to: 'comments#create'   -create a new comment - crear un nuevo comentario -> params
  
