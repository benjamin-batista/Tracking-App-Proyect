function validar()
		{
			var usuario = document.getElementById("usuario").value;
			var Contraseña = document.getElementById("pass").value;	
			var url = 'http://localhost:8080/api/users/user/';

            var format = {
                _id:usuario,
                name:usuario,
                cord:"NA",
                password:Contraseña,
                _class:"com.PKWORK.crud.models.UserDTO"};
                
                fetch("http://localhost:8080/api/users/user/"+usuario)
			.then(response=>response.json())
			.then(data=>{
				console.log(data)
				if(usuario == data._id)
			{
				alert("user exists");
			}
			else
			{
				
			}
			})

			fetch(url, {
				method: 'POST', // or 'PUT'
				body: JSON.stringify(format), // data can be `string` or {object}!
				headers:{
				  'Content-Type': 'application/json'
				}
			  }).then(res => res.json())
			  .then(_=>{
				alert("user created");})
			  .catch(error => console.error('Error:', error))
			  .then(response => console.log('Success:', response));
		}