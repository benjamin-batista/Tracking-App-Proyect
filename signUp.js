function signup()
		{
			var user = document.getElementById("usersignup").value;
			var Password = document.getElementById("passsignup").value;
            var Email = document.getElementById("emailsignup").value;	
			var url = 'http://localhost:8080/api/users/user/';

            var format = {
                _id:user,
                name:user,
                cord: Email,
                password:Password,
                _class:"com.PKWORK.crud.models.UserDTO"};
                
                fetch("http://localhost:8080/api/users/user/"+user)
			.then(response=>response.json())
			.then(data=>{
				console.log(data)
				if(user == data._id)
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