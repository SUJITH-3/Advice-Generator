async function Execute() {
    try {
        let res = await fetch("	https://api.adviceslip.com/advice")
        if (!res.ok) {
            throw new Error("Cannot find result");
        }
        let json_obj = await res.json();
        let p = document.createElement("p")
        p.id = "content"
        p.textContent = `" ${json_obj.slip.advice} "`
        let title = document.querySelector(".title")
        title.nextSibling.remove();
        title.after(p);

    }

    catch (e) {
        console.log(e)
        let p = document.createElement("p")
        p.id = "content"
        p.textContent = e
        let title = document.querySelector(".title")
        title.nextSibling.remove();
        title.after(p);
    }





}
