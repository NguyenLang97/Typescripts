// INTERFACE
interface Person {
    name: string,
    age: number,
    speak(lang: string): void
    spend(amount: number): void


}

const henry: Person = {
    name: 'henry', 
    age:30, 
    speak(text: string): void {
        console.log(text);
    },
    spend(amt: number): number {
        return amt
    }
}

// console.log(henry);

const helloPerson = (onePerson: Person) => console.log(`hello ${onePerson.name}`)

helloPerson(henry)