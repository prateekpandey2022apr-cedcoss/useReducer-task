import {
  Page,
  Badge,
  Card,
  FormLayout,
  TextField,
  Heading,
  TextContainer,
  Layout,
  Checkbox,
  Stack,
  RadioButton,
  Button,
  Modal,
} from "@shopify/polaris";
import React, { useState, useReducer, useCallback } from "react";
import { handleFormInput } from "./reducers";

export default function ProductForm() {
  const initialState = {
    title: "",
    description: "",
    handlingTime: "",
    sku: "",
    barcode: false,
    amzn_category: "",
    imageSelection: "",
  };

  const [state, dispatch] = useReducer(handleFormInput, initialState);

  const [active, setActive] = useState(true);
  const handleChange = useCallback(() => setActive(!active), [active]);

  function handleForm(event) {
    console.log(event);
    console.log(initialState);
  }

  return (
    <Page
      breadcrumbs={[{ content: "Products", url: "/products" }]}
      title="Add Product Form"
    >
      <FormLayout>
        <FormLayout.Group>
          <TextContainer>
            <Heading>Title *</Heading>
            <p>Mention the title of the product you want to display.</p>
          </TextContainer>
          <Card sectioned>
            <TextField
              type="text"
              // label="Maximum order"
              value={state.title}
              onChange={(value) =>
                dispatch({ type: "ADD", field: "title", value: value })
              }
              autoComplete="off"
              requiredIndicator
            />
          </Card>
        </FormLayout.Group>

        <hr />

        <FormLayout.Group>
          <TextContainer>
            <Heading>Description </Heading>
            <p>Mention the title of the product you want to display.</p>
          </TextContainer>
          <Card sectioned>
            <TextField
              type="text"
              // label="Maximum order"
              value={state.description}
              onChange={(value) =>
                dispatch({ type: "ADD", field: "description", value: value })
              }
              autoComplete="off"
              requiredIndicator
            />
          </Card>
        </FormLayout.Group>

        <hr />

        <FormLayout.Group>
          <TextContainer>
            <Heading>Handling Time *</Heading>
            <p>Mention the title of the product you want to display.</p>
          </TextContainer>
          <Card sectioned>
            <TextField
              type="text"
              // label="Maximum order"
              value={state.handlingTime}
              onChange={(value) =>
                dispatch({ type: "ADD", field: "handlingTime", value: value })
              }
              autoComplete="off"
              requiredIndicator
            />
          </Card>
        </FormLayout.Group>

        <hr />

        <FormLayout.Group>
          <TextContainer>
            <Heading>Amazon parent SKU</Heading>
            <p>Mention the title of the product you want to display.</p>
          </TextContainer>
          <Card sectioned>
            <TextField
              type="number"
              // label="Maximum order"
              value={state.sku}
              onChange={(value) =>
                dispatch({ type: "ADD", field: "sku", value: value })
              }
              autoComplete="off"
              requiredIndicator
            />
          </Card>
        </FormLayout.Group>

        <hr />

        <FormLayout.Group>
          <TextContainer>
            <Heading>Barcode/GTIN Exception</Heading>
            <p>Mention the title of the product you want to display.</p>
          </TextContainer>
          <Card sectioned>
            <Checkbox
              label="Barcode/GTIN Exception"
              checked={state.barcode}
              value={state.barcode}
              onChange={(value) =>
                dispatch({ type: "ADD", field: "barcode", value: value })
              }
            />
          </Card>
        </FormLayout.Group>

        <hr />

        <FormLayout.Group>
          <TextContainer>
            <Heading>Add Amazon Category</Heading>
            <p>Mention the title of the product you want to display.</p>
          </TextContainer>
          <Card sectioned>
            <TextField
              type="text"
              // label="Maximum order"
              value={state.amzn_category}
              onChange={(value) =>
                dispatch({ type: "ADD", field: "amzn_category", value: value })
              }
              autoComplete="off"
              requiredIndicator
            />
          </Card>
        </FormLayout.Group>

        <hr />

        <FormLayout.Group>
          <TextContainer>
            <Heading>Image Selection</Heading>
            <p>Mention the title of the product you want to display.</p>
          </TextContainer>
          <Card sectioned>
            <Stack vertical>
              <RadioButton
                label="Set product images as shown on shopify"
                // helpText="Customers will only be able to check out as guests."
                checked={state.imageSelection === "shopify"}
                value={state.imageSelection}
                onChange={(checked, value) => {
                  // debugger;
                  console.log(value);

                  dispatch({
                    type: "ADD",
                    field: "imageSelection",
                    value: value,
                  });
                }}
                id="shopify"
                name="accounts"
                // onChange={handleChange}
              />
              <RadioButton
                label="Set custom amazon images"
                // helpText="Customers will be able to check out with a customer account or as a guest."
                value={state.imageSelection}
                onChange={(checked, value) => {
                  // debugger;
                  console.log(value);
                  dispatch({
                    type: "ADD",
                    field: "imageSelection",
                    value: value,
                  });
                }}
                id="amazon"
                name="accounts"
                checked={state.imageSelection === "amazon"}
                // onChange={handleChange}
              />
            </Stack>
          </Card>
        </FormLayout.Group>

        <hr />

        <FormLayout.Group>
          <Card sectioned>
            <Button primary fullWidth onClick={handleChange}>
              Add product
            </Button>
          </Card>
        </FormLayout.Group>
        <hr />
      </FormLayout>

      <div>
        <Modal
          // activator={activator}
          open={active}
          onClose={handleChange}
          title="Reach more shoppers with Instagram product tags"
        >
          <Modal.Section>
            <TextContainer>
              <p>Title: {state.title}</p>
              <p>Description: {state.description}</p>
              <p>Handling time: {state.handlingTime}</p>
              <p>Amazon parent SKU: {state.sku}</p>
              <p>Barcode/GTIN Exception : {state.sku ? "Yes" : "No"}</p>
              <p>Amazon Category : {state.amzn_category}</p>
              <p>Image Selection : {state.imageSelection}</p>
            </TextContainer>
          </Modal.Section>
        </Modal>
      </div>
    </Page>
  );
}
