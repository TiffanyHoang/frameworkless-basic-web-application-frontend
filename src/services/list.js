export function getList() {
    return fetch('https://tiffany-app.svc.platform.myobdev.com/people', {
        headers: {
            'Authorization': 'Basic YWxhZGRpbjpvcGVuc2VzYW1l'
        }
    })
    .then(data => data.json())
}
export function setItem(Name) {
    return fetch('https://tiffany-app.svc.platform.myobdev.com/people', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic YWxhZGRpbjpvcGVuc2VzYW1l'
        },
        body: JSON.stringify({ Name })
    })
    .then(data => data.json())
}