import React, { useState } from "react";
import { Alert } from "reactstrap";

export default function GetStatus({ loaded }) {
    const [visible, setVisible] = useState(true);
  
    const onDismiss = () => setVisible(false);

    if(loaded) {
        return (
            <Alert color="success" isOpen={visible} toggle={onDismiss}>
              Successfully fetched data from the API
            </Alert>
          );
        } return (
            <Alert color="danger">
              Error fetching data from the API
            </Alert>
        );
    }