const params = new URLSearchParams(window.location.search);
const name_of_the_sahaba = params.get("sahaba_name");

const person = sahaba.find(p => p.slug === name_of_the_sahaba);

if (person) {
    document.querySelector(".sahaba-main-img").src = person.img;
    document.querySelector(".sahaba-main-name").innerHTML = person.sahabe_name;
    document.querySelector(".sahaba-main-title").innerHTML = person.title;
    document.querySelector(".sahaba-role").innerHTML = person.role;
    document.querySelector(".sahaba-relation").innerHTML = person.relation;
    document.querySelector(".sahaba-islam-start").innerHTML = person.islam_date;
    document.querySelector(".sahaba-highlight").innerHTML = person.short_story;

    document.querySelector(".sahaba-achievement").innerHTML = person.achievement.map(achievement => `<li>${achievement}</li>`).join("");

} else {
    document.querySelector(".sahaba-main-name").innerHTML = 'Person not found.';
}









