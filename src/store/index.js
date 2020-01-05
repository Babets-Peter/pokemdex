import { decorate, observable } from 'mobx'
import Api from '../api/index'

class PokemonStore {
	pokemons = null;
	totalOnPage = 5;
	totalSelect = [10,20,50];
	filtredData = null;
	searchValue = '';
	selected = [];
	isActive;
	isLoading = true;
	time = 3000

	getAllPokemons = async _ => {
		const response = await Api.getAllPokemons(this.totalOnPage)
		setTimeout( _ => this.pokemons = response, this.time)
		this.isLoading = false
	}

	showDataHandler = num => {
		this.isLoading = true
		this.totalOnPage = num
		this.isActive = num
	}

	searchHanlder = e => {
		this.searchValue = e.target.value.trim().toLowerCase()
		this.filtredData = this.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.searchValue))
	}


	selectedHandler = opt => {
		let checkSelect = []
		opt && opt.forEach(item => item && checkSelect.push(item.value))
		this.selected = checkSelect
		let filtred = []
		this.pokemons.forEach(pokemon => pokemon['types'].forEach(type => checkSelect.includes(type.type.name) && filtred.push(pokemon)))
		this.filtredData = [...new Set(filtred)]
	}
}

decorate(PokemonStore, {
	pokemons: observable.ref,
	filtredData: observable.ref,
	totalOnPage: observable
})
export default new PokemonStore();