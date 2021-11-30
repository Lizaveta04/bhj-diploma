/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest;
    try {
    	if (options.method === 'GET') {
    		for (let key in options.data) {
    			xhr.open(`${options.method}`, `${options.url}`?`${mail}`=`${options.data[key].email}`&`${password}`=`${options.data[key].password}`);
    			xhr.send();
    		}
    	}
    	else {
    		const formData = new FormData();
    		for (let key in options.data) {
    			formData.append('mail', `${options.data[key].password}`);
    			formData.append('password', `${options.data[key].password}`);
    		}
    		xhr.open(`${options.method}`, `${options.url}`);
    		xhr.send(formData);
    	}
    	xhr.responseType = 'json';
    	options.callback(null, xhr.response);
    } catch (e) {
    	options.callback(e, xhr.response);
    }
};
