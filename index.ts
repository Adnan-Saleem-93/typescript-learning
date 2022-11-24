let printHelloWithName: (name: string) => string = (name: string) => {
  return `Hello ${name}`
}

let header = document.createElement('h1')

header.textContent = printHelloWithName('People.!')

document.body.appendChild(header)
