This website uses [staticjinja](https://staticjinja.readthedocs.org/) to build top level html files, please use the instructions below to modify html files.

## Getting started

```
pip install -r requirements.txt
```

To monitor your source directory for changes, and recompile files if they change:

```
python build.py & python -m SimpleHTTPServer && fg
```

For Python 3.6.0 : 
```
python build.py & python -m http.server && fg
```

This will recursively search `./templates` for templates (any file whose name does not start with `.` or `_`) and build them to `.`.

Commit both the rendered html and the file inside `/templates/`


## Contributing

- Send Pull-request against `master` branch.
- Once you pull-request is merged is will be automatically go live at https://pythonindia.github.io/inpycon2017/
