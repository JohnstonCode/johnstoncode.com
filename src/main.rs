#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;

use std::collections::HashMap;
use rocket_contrib::serve::StaticFiles;
use rocket_contrib::templates::Template;

#[get("/")]
fn index() -> Template {
    let context: HashMap<&str, &str> = HashMap::new();
    Template::render("index", &context)
}

fn main() {
    rocket::ignite()
    .mount("/", routes![index])
    .mount("/", StaticFiles::from("static"))
    .attach(Template::fairing())
    .launch();
}
