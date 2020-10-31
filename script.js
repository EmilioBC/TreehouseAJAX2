var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if(xhr.readyState===4 && xhr.status===200) {
        document.getElementById('ajax').innerHTML = xhr.responseText;
    }
};
xhr.opent('GET', 'sidebar.html');
xhr.send();