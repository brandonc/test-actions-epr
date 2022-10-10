// This script checks if the secret is set 
function main() {
  if (process.env.MY_SUPER_SECRET_ENV != '') {
    console.log("My secret is set!")
  }
}

main()
