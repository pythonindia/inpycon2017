This website uses [staticjinja](https://staticjinja.readthedocs.org/) to build top level html files, please use the instructions below to modify html files.

## Getting started

```
pip install staticjinja
```

To monitor your source directory for changes, and recompile files if they change, use `watch`:

```
./build.py & python -m SimpleHTTPServer && fg
```

This will recursively search `./templates` for templates (any file whose name does not start with `.` or `_`) and build them to `.`.

Commit both the rendered html and the file inside `/templates/`
