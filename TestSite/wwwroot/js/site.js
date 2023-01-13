
function soap() {
    var xmlhttp_test = new XMLHttpRequest();
    xmlhttp_test.open('POST', 'http://isapi.icu-tech.com/icutech-test.dll', true);

    var UserName = document.getElementById('UsernameID').value;
    var Password = document.getElementById('PasswordID').value;

    var loginsr =
        '<?xml version="1.0" encoding="UTF-8"?>' +
        '<env:Envelope ' +
        'xmlns:env="http://www.w3.org/2003/05/soap-envelope" ' +
        'xmlns:ns1="urn:ICUTech.Intf-IICUTech" ' +
        'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
        'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
        'xmlns:enc="http://www.w3.org/2003/05/soap-encoding">' +
        '<env:Body>' +
        '<ns1:Login env:encodingStyle="http://www.w3.org/2003/05/soap-encoding">' +
        '<UserName xsi:type="xsd:string">' + UserName + '</UserName>' +
        '<Password xsi:type="xsd:string">' + Password + '</Password>' +
        '<IPs xsi:type="xsd:string">901212339</IPs>' +
        '</ns1:Login>' +
        '</env:Body>' +
        '</env:Envelope>';

    xmlhttp_test.onreadystatechange = function () {
        if (xmlhttp_test.readyState == 4) {
            if (xmlhttp_test.status == 200) {
                alert(xmlhttp_test.responseText);
                // alert('done. use firebug/console to see network response');
            }
        }
    }

    // Send the POST request
    xmlhttp_test.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp_test.send(loginsr);
}

function LoadSite() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', 'http://isapi.icu-tech.com/icutech-test.dll', true);

    var sr =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<env:Envelope ' +
        'xmlns:env="http://www.w3.org/2003/05/soap-envelope" ' +
        'xmlns:ns1="urn:ICUTech.Intf-IICUTech" ' +
        'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
        'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
        'xmlns:enc="http://www.w3.org/2003/05/soap-encoding">' +
        '<env:Body>' +
        '<ns1:RegisterNewCustomer ' +
        'env:encodingStyle="http://www.w3.org/2003/05/soap-encoding">' +
        '<Email xsi:type="xsd:string">ilya.gritchin@mail.ru</Email>' +
        '<Password xsi:type="xsd:string">123456789</Password>' +
        '<FirstName xsi:type="xsd:string">Gritchin</FirstName>' +
        '<LastName xsi:type="xsd:string">Ilya</LastName>' +
        '<Mobile xsi:type="xsd:string">9992929992</Mobile>' +
        '<CountryID xsi:type="xsd:int">900</CountryID>' +
        '<aID xsi:type="xsd:int">38</aID>' +
        '<SignupIP xsi:type="xsd:string">901212339</SignupIP>' +
        '</ns1:RegisterNewCustomer>' +
        '</env:Body>' +
        '</env:Envelope>';

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                alert(xmlhttp.responseText);
                // alert('done. use firebug/console to see network response');
            }
        }
    }

    // Send the POST request
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.send(sr);
}

function onClick() {
    //document.getElementById('UsernameID').innerHTML = input.value;
    var user = document.getElementById('UsernameID').value;

    alert(user);
}