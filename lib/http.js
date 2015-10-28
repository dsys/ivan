import http from 'http'

export function start (router, port) {
  return new Promise((resolve, reject) => {
    server.listen(port, err => {
      if (err == null) {
        resolve(server)
      } else {
        reject(err)
      }
    })
  })
}
