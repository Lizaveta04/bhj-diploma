/**
 * Основная функция для совершения запросов на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest;
    try {
    	if (options.method === 'GET') {
    		xhr.open(`${options.method}`, `${options.url}?${Object.keys(options.data)[0]}=${Object.values(options.data)[0]}&${Object.keys(options.data)[1]}=${Object.values(options.data)[1]}`);
    		xhr.send();
    	} else {
    		const formData = new FormData();
    		formData.append(`${Object.keys(options.data)[0]}`, `${Object.values(options.data)[0]}`);
    		formData.append(`${Object.keys(options.data)[1]}`, `${Object.values(options.data)[1]}`);
    		xhr.open(`${options.method}`, `${options.url}`);
    		xhr.send(formData);
    	}
    	xhr.responseType = 'json';
    	if (xhr.readyState === xhr.DONE && xhr.status === 200) {
    		options.callback(null, xhr.response);
    	}
    } catch (err) {
    	options.callback(err);
    }
};

