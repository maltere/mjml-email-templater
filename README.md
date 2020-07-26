# `mjml` and `txt` E-Mail Templater

A Gulp pipeline to compile and bundle [mjml](https://github.com/mjmlio/mjml) and txt emails in one place. 
Additionally the [`jinja2`](https://jinja.palletsprojects.com/en/2.11.x/) / 
[`nunjucks`](https://github.com/mozilla/nunjucks) templating syntax from python can be used.
The Application where this project was originally intended for, had the need to collect HTML and TXT emails in a bundled place, for easily editing and testing.

## Usage

``npm run build``: Build emails once.

or 

``npm run watch``: Watch for edited files.

