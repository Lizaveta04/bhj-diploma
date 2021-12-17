/**
 * Основная функция для совершения запросов на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest;
    const formData = new FormData();
    xhr.responseType = 'json';
    if (options.method === 'GET') {
    	for (key in options.data) {
    		let address = key + '=' + options.data[key] + '&';
    	}
    	try {
    		xhr.open(options.method, options.url + '?' + address);
    		xhr.send();
    	}
    	catch (err) {
    		options.callback(err);
    	}
    } else {
    	for (key in options.data) {
    		formData.append(key, options.data[key]);
    	}
    	try {
    		xhr.open(options.method, options.url);
    		xhr.send(formData);
    	}
    	catch (err) {
    		options.callback(err);
    	}
    };
    xhr.addEventListener('readystatechange', () => {
    	if (xhr.readyState === xhr.DONE && xhr.status === 200) {
    		options.callback(null, xhr.response);
    	}
    });
}

