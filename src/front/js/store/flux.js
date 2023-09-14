const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			user: null,
			user_name: null,
			token: sessionStorage.getItem("token")
		},
		actions: {
			createUser: async (username, email, password) => {
				const opts = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						username: username,
						email: email,
						password: password,

					})
				};
				try {
					console.log(process.env.BACKEND_URL + "/signup");
					const result = await fetch(process.env.BACKEND_URL + "api/signup", opts)
					//const data = await result.json() // unexpected end of JSON is coming from here.
					//setStore({ user: data })
					console.log(result);
					return true

				} catch (error) {
					console.log("signup error here!", error)
				}

			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			logout: () => {
				const cf_url = getStore().cf_url
				const token = sessionStorage.removeItem("token");
				setStore({ token: null });
				window.location.href = cf_url + "/";
			},

			login: async (email, password) => {
				console.log(email, password);
				const opts = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email: email,
						password: password,
					}),
				};
				const res = await fetch(process.env.BACKEND_URL + "api/login", opts);
				if (res.status < 200 || res.status >= 300) {
					throw new Error("There was an error signing in");
				}
				const data = await res.json();

				sessionStorage.setItem("token", data.token);
				// data.favorites.forEach(f => {
				//   //was returning an error bc it didnt like the single quotes so the line below turns the single into double quotes 
				//   f.item = f.item.replace(/'/g, '"')
				//   f.item = JSON.parse(f.item)
				// })
				console.log("USER INFO HERE", data)
				setStore({
					token: data.access_token,
					// These aren't on the response from the login
					// So you can either change the backend to send the user data
					// along with the token, or change this to make a second request for this data.
					
				});
				return true;
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}

	};
};

export default getState;
