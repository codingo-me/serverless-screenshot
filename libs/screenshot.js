'use strict';

class Screenshot {

    constructor(validUrl) {
        this.validUrl = validUrl;
    }

    take(url) {

        var response = {
            statusCode: 200,
            body: JSON.stringify({"message": "Url OK"})
        };

        if (!_validateUrl(url)) {
            response = {
                statusCode: 422,
                body: JSON.stringify({"message": "Not valid URL"})
            };
        }

        return response;

    }

    _validateUrl(url) {
        if (!this.validUrl.isUri(url)) {
            return false;
        }

        return true;
    }
}