export function getList() {
    return fetch('http://localhost:3001/')
      .then(data => data.json())
  }