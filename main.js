
class Handle_babel {
  constructor(){
    this.name = ""
    this.hash = Math.random()
    this.execute()
  }

  execute() {
    console.log(`User: ${this.name} \n Id: ${this.hash}`)
  }

}
