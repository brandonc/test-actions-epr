
function main() {
  if process.env.MY_SUPER_SECRET_ENV != '' {
    console.log("My secret is set!")
  }
}

main()
