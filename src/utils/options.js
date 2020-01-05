export default class Utils {

	 static createOptions = dataTypes => {
		let options = []
		dataTypes.forEach(el => {
			el.types && el.types.forEach(type => {
				options.push({value: type.type.name, label: type.type.name})
			})
		})
		options.forEach(obj => {
		  let result = []
		  for(let item of options){
		    if(!result.includes(item.value))
		      result.push(item.value)
		  }
		  options = []
		  result.forEach(uniq => {
		      options.push({value: uniq, label: uniq})
		      })
		})
		return options
	}
}