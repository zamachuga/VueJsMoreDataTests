import Proxy from './api-proxy.js';

export default {
	name: 'ComponentHome',
	props: ["store"],
	data() {
		return {
			ParametersGetRoups: 1,
			Groups:[],
			DropDownData:{
				CurrentId: null,
				CurrentText: null
			}
		}
	},
	methods: {
		OnSelect(Id, Name){
			let _This = this;

			_This.DropDownData.CurrentId = Id;
			_This.DropDownData.CurrentText = Name;
		},
		ApiGetGroups(){
			let _This = this;

			Proxy.GetGroups(
				_This.ParametersGetRoups,
				Data => {
					_This.Groups = Data;
				},
				Error => { 
					console.warn(Error);
				}
			);
		}
	}
}