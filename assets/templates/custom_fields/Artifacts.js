import React, { Component } from "react";

import { Input, Array } from "react-invenio-forms";
import { Grid, Form, Button, Icon } from "semantic-ui-react";

const newArtifact = {
  type: "",
  timestamp: "",
  add_details: "",
  path: "",
  link: "",
};

export class Artifacts extends Component {
  render() {
    const {
      fieldPath, // injected by the custom field loader via the `field` config property
      type,
      timestamp,
      add_details,
      path,
      link,
      icon,
      addButtonLabel,
      description,
      label,
    } = this.props;
    return (
      <Array
        fieldPath={fieldPath}
        label={label}
        icon={icon}
        addButtonLabel={addButtonLabel}
        defaultNewValue={newArtifact}
        description={description}
      >
        {({ arrayHelpers, indexPath }) => {
          const fieldPathPrefix = `${fieldPath}.${indexPath}`;
          return (
            <Grid>
              <Grid.Column width="7">
                <Input
                  fieldPath={`${fieldPathPrefix}.type`}
                  label={type.label}
                  placeholder={type.placeholder}
                  description={type.description}
                ></Input>
              </Grid.Column>
              <Grid.Column width="8">
                <Input
                  fieldPath={`${fieldPathPrefix}.timestamp`}
                  label={timestamp.label}
                  icon={"building"}
                  placeholder={timestamp.placeholder}
                  description={timestamp.description}
                ></Input>
              </Grid.Column>              <Grid.Column width="7">
                <Input
                  fieldPath={`${fieldPathPrefix}.add_details`}
                  label={add_details.label}
                  placeholder={add_details.placeholder}
                  description={add_details.description}
                ></Input>
              </Grid.Column>
              <Grid.Column width="8">
                <Input
                  fieldPath={`${fieldPathPrefix}.path`}
                  label={path.label}
                  icon={"building"}
                  placeholder={path.placeholder}
                  description={path.description}
                ></Input>
              </Grid.Column>
              <Grid.Column width="8">
                <Input
                  fieldPath={`${fieldPathPrefix}.link`}
                  label={link.label}
                  icon={"building"}
                  placeholder={link.placeholder}
                  description={link.description}
                ></Input>
              </Grid.Column>
              <Grid.Column width="1">
                <Form.Field style={{ marginTop: "1.75rem", float: "right" }}>
                  <Button
                    aria-label={"Remove field"}
                    className="close-btn"
                    icon
                    onClick={() => arrayHelpers.remove(indexPath)}
                    type="button"
                  >
                    <Icon name="close" />
                  </Button>
                </Form.Field>
              </Grid.Column>
            </Grid>
          );
        }}
      </Array>
    );
  }
}
