import axios from 'axios';

export default class AddressesService {
    static Addresses_API = `${process.env.REACT_APP_API_URL}/addresses`;

    static getAddresses() {
        return axios.get(this.Addresses_API)
            .then((response) => {
                return response.data;
            }).catch((error) => {
                console.log(error)
            });
    }

    static getAddress(addressId) {
        return axios.get(`${this.Addresses_API}/${addressId}`)
            .then((response) => {
                return response.data;
            }).catch((error) => {
                console.log(error)
            });
    }

    static addAddress(address) {
        return axios.post(this.Addresses_API, address)
            .then((response) => {
                return response.data;
            }).catch((error) => {
                console.log(error)
            });
    }
}