function validar()
		{
			var usuario = document.getElementById("usuario").value;
			var Contraseña = document.getElementById("pass").value;	
			fetch("http://localhost:8080/api/users/user/"+usuario)
			.then(response=>response.json())
			.then(data=>{
				console.log(data)
				if(usuario == data._id && Contraseña == data.password)
			{
				// alert("Usuario y Contraseña validos");
                location.href ="http://127.0.0.1:5501/Home-Logged.html";
			}
			else
			{
				alert("Verifique sus credenciales");
			}
			})
		}
