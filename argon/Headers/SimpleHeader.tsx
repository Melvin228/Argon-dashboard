// nodejs library to set properties for components
import PropTypes from "prop-types";
import React from "react";
// reactstrap components
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Col,
  Container,
  Row,
} from "reactstrap";

function SimpleHeader({ name, parentName }) {
  return (
    <>
      <div className="header header-dark bg-dark pb-6 content__title content__title--calendar">
        <Container fluid>
          <div className="header-body">
            <Row className="align-items-center py-4">
              <Col lg="6" xs="7">
                <h6 className="fullcalendar-title h2 text-white d-inline-block mb-0">
                  {name}
                </h6>{" "}
                <Breadcrumb
                  className="d-none d-md-inline-block ml-lg-4"
                  listClassName="breadcrumb-links breadcrumb-dark"
                >
                  <BreadcrumbItem>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <i className="fas fa-home" />
                    </a>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      {parentName}
                    </a>
                  </BreadcrumbItem>
                  <BreadcrumbItem aria-current="page" className="active">
                    {name}
                  </BreadcrumbItem>
                </Breadcrumb>
              </Col>
              <Col className="mt-3 mt-md-0 text-md-right" lg="6" xs="5">
                <Button className="btn-neutral" color="default" size="sm">
                  New
                </Button>
                <Button className="btn-neutral" color="default" size="sm">
                  Filters
                </Button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

SimpleHeader.propTypes = {
  name: PropTypes.string,
  parentName: PropTypes.string,
};

export default SimpleHeader;
