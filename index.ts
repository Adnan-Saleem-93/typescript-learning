let printHelloWithName: (text: string) => string = (text: string) => {
  return `Hello ${text}`
}

let message = 'World'

let header = document.createElement('h1')

header.textContent = printHelloWithName(message)

// message = 0 -> this iwll cause an error because when we assigned 'World' to 'message' variable, TS inferred its type to string. So 'message' can only be assigned string values.

document.body.appendChild(header)
