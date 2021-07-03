export function getList() {
  return fetch('http://localhost:3001/')
    .then(res => res.json())

}