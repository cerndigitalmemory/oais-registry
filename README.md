# OAIS Registry

```bash
# needed because node18
export NODE_OPTIONS=--openssl-legacy-provider

invenio-cli install
invenio-cli services-setup

invenio-cli run

# in another terminal:
invenio-cli assets build
# or watch
invenio-cli assets watch


# workaround for watch to pick up changes to the less files
ln -s assets/less/cds-rdm ~/.virtualenvs/oais-registry-KEvpN4yF/var/instance/less
```

Visit https://127.0.0.1:5000


To push updates to the openshift deployment:

```
docker build -t gitlab-registry.cern.ch/digitalmemory/openshift-deploy/oais-registry-rdm .
docker push gitlab-registry.cern.ch/digitalmemory/openshift-deploy/oais-registry-rdm
```

## Troubleshooting

If the services can't be brought up, run `invenio-cli services stop` and `docker-compose down` before running `invenio-cli run` again.
Check also `docker ps` that you don't have similar pods up from other instances.

To reset the instance, run `invenio-cli services destroy`.
