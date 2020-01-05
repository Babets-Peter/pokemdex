export default class Api {
	static apiUrl = `https://pokeapi.co/api/v2/pokemon`

	static getAllPokemons = async (limit) => {
		let response = await fetch(Api.apiUrl + `/?limit=${limit}`)
		let respJson = await response.json()
		let allDetails = await Api.getDetails(respJson.results)
		return allDetails		
	}

	static getDetails = (respData) => {
		respData.map(async (el, ind) => {
			let { url } = el
			let resp = await fetch(url)
			let pokeData = await resp.json()
			respData[ind] = pokeData
		})
		return respData
	}

}