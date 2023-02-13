import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Button

} from "reactstrap";
//Import images
import logoDark from "../assets/netherland.png";
import classnames from "classnames";
import "../pages/workspace.css";
import Upload from '../pages/upload';
import logo1 from './V-1.png';
import logo2 from './V-2.png';
import logo3 from './V-3.png';
import logo4 from './V-4.png';
import logo5 from './V-5.png';
import logo6 from './V-6.png';
import logo7 from './V-7.png';
import logo8 from './V-8.png';
import logo9 from './V-9.png';
import logo10 from './V-10.png';
import logo11 from './V-11.png';
import logo12 from './V-12.png';
import logo13 from './V-13.png';
import logo14 from './V-14.png';
import logo15 from './V-15.png';


// import { loadAnimation } from "lottie-web";
// import { defineLordIconElement } from "lord-icon-element";

// defineLordIconElement(loadAnimation);


const imageClick1 = () => {
  console.log('click');
  document.getElementById("image1").style.display = "block";
  document.getElementById("image1").style.position = "absolute";
  document.getElementById("image1").style.left = "0%";
  document.getElementById("image1").style.top = "15%";
}

const imageClick2 = () => {
  console.log('click');
  document.getElementById("image2").style.display = "block";
  document.getElementById("image2").style.position = "absolute";
  document.getElementById("image2").style.left = "0%";
  document.getElementById("image2").style.top = "15%";
}

const imageClick3 = () => {
  console.log('click');
  document.getElementById("image3").style.display = "block";
  document.getElementById("image3").style.position = "absolute";
  document.getElementById("image3").style.left = "0%";
  document.getElementById("image3").style.top = "15%";
}

const imageClick4 = () => {
  console.log('click');
  document.getElementById("image4").style.display = "block";
  document.getElementById("image4").style.position = "absolute";
  document.getElementById("image4").style.left = "0%";
  document.getElementById("image4").style.top = "15%";
}

const imageClick5 = () => {
  console.log('click');
  document.getElementById("image5").style.display = "block";
  document.getElementById("image5").style.position = "absolute";
  document.getElementById("image5").style.left = "0%";
  document.getElementById("image5").style.top = "15%";
}

const imageClick6 = () => {
  console.log('click');
  document.getElementById("image6").style.display = "block";
  document.getElementById("image6").style.position = "absolute";
  document.getElementById("image6").style.left = "0%";
  document.getElementById("image6").style.top = "15%";
}

const imageClick7 = () => {
  console.log('click');
  document.getElementById("image7").style.display = "block";
  document.getElementById("image7").style.position = "absolute";
  document.getElementById("image7").style.left = "0%";
  document.getElementById("image7").style.top = "15%";
}

const imageClick8 = () => {
  console.log('click');
  document.getElementById("image8").style.display = "block";
  document.getElementById("image8").style.position = "absolute";
  document.getElementById("image8").style.left = "0%";
  document.getElementById("image8").style.top = "15%";
}

const imageClick9 = () => {
  console.log('click');
  document.getElementById("image9").style.display = "block";
  document.getElementById("image9").style.position = "absolute";
  document.getElementById("image9").style.left = "0%";
  document.getElementById("image9").style.top = "15%";
}

const imageClick10 = () => {
  console.log('click');
  document.getElementById("image10").style.display = "block";
  document.getElementById("image10").style.position = "absolute";
  document.getElementById("image10").style.left = "0%";
  document.getElementById("image10").style.top = "15%";
}

const imageClick11 = () => {
  console.log('click');
  document.getElementById("image11").style.display = "block";
  document.getElementById("image11").style.position = "absolute";
  document.getElementById("image11").style.left = "0%";
  document.getElementById("image11").style.top = "15%";
}

const imageClick12 = () => {
  console.log('click');
  document.getElementById("image12").style.display = "block";
  document.getElementById("image12").style.position = "absolute";
  document.getElementById("image12").style.left = "0%";
  document.getElementById("image12").style.top = "15%";
}

const imageClick13 = () => {
  console.log('click');
  document.getElementById("image13").style.display = "block";
  document.getElementById("image13").style.position = "absolute";
  document.getElementById("image13").style.left = "0%";
  document.getElementById("image13").style.top = "15%";
}

const imageClick14 = () => {
  console.log('click');
  document.getElementById("image14").style.display = "block";
  document.getElementById("image14").style.position = "absolute";
  document.getElementById("image14").style.left = "0%";
  document.getElementById("image14").style.top = "15%";
}

const imageClick15 = () => {
  console.log('click');
  document.getElementById("image15").style.display = "block";
  document.getElementById("image15").style.position = "absolute";
  document.getElementById("image15").style.left = "0%";
  document.getElementById("image15").style.top = "15%";
}

const FormWizard = () => {
  const [activeArrowTab, setactiveArrowTab] = useState(4);
  const [passedarrowSteps, setPassedarrowSteps] = useState([1]);


  function toggleArrowTab(tab) {
    if (activeArrowTab !== tab) {
      var modifiedSteps = [...passedarrowSteps, tab];

      if (tab >= 4 && tab <= 7) {
        setactiveArrowTab(tab);
        setPassedarrowSteps(modifiedSteps);
      }
    }
  }

  document.title = "Wizard | Velzon - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="header">
        <h1>DOOR</h1>
      </div>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col xl={12}>
              <Card>
                <CardHeader>
                  <h5 className="card-title mb-0" >SELECT THE DOOR MODELS</h5>
                </CardHeader>
                <CardBody className="form-steps">
                  <Form>
                    <div className="text-center pt-3 pb-4 mb-1">
                      <img src={logoDark} alt="" height="17" />
                    </div>
                    <div className="step-arrow-nav mb-4">
                      <Nav
                        className="nav-pills custom-nav nav-justified"
                        role="tablist"
                      >
                        <NavItem>
                          <NavLink
                            href="#"
                            id="steparrow-gen-info-tab"
                            className={classnames({
                              active: activeArrowTab === 4,
                              done: activeArrowTab <= 6 && activeArrowTab > 3,
                            })}
                            onClick={() => {
                              toggleArrowTab(4);
                            }}
                          >
                            Select Client
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            href="#"
                            id="steparrow-gen-info-tab"
                            className={classnames({
                              active: activeArrowTab === 5,
                              done: activeArrowTab <= 6 && activeArrowTab > 4,
                            })}
                            onClick={() => {
                              toggleArrowTab(5);
                            }}
                          >
                            Edit Door
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            href="#"
                            id="steparrow-gen-info-tab"
                            className={classnames({
                              active: activeArrowTab === 6,
                              done: activeArrowTab <= 6 && activeArrowTab > 5,
                            })}
                            onClick={() => {
                              toggleArrowTab(6);
                            }}
                          >
                            Finish
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>

                    <TabContent activeTab={activeArrowTab}>
                      <TabPane id="steparrow-gen-info" tabId={4}>
                        <div>
                          <Row>
                            <Col lg={6}>
                              <div className="mb-3">
                                <Label
                                  className="form-label"
                                  htmlFor="steparrow-gen-info-email-input"
                                >
                                  Email
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="steparrow-gen-info-email-input"
                                  placeholder="Enter Email"
                                />
                              </div>
                            </Col>
                            <Col lg={6}>
                              <div className="mb-3">
                                <Label
                                  className="form-label"
                                  htmlFor="steparrow-gen-info-username-input"
                                >
                                  User Name
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="steparrow-gen-info-username-input"
                                  placeholder="Enter User Name"
                                />
                              </div>
                            </Col>
                          </Row>
                          <div className="mb-3">
                            <Label
                              className="form-label"
                              htmlFor="steparrow-gen-info-password-input"
                            >
                              Password
                            </Label>
                            <Input
                              type="password"
                              className="form-control"
                              id="steparrow-gen-info-password-input"
                              placeholder="Enter Password"
                            />
                          </div>
                          <div>
                            <Label
                              className="form-label"
                              htmlFor="steparrow-gen-info-confirm-password-input"
                            >
                              Confirm Password
                            </Label>
                            <Input
                              type="password"
                              className="form-control"
                              id="steparrow-gen-info-confirm-password-input"
                              placeholder="Enter Confirm Password"
                            />
                          </div>
                        </div>
                        <div className="d-flex align-items-start gap-3 mt-4">
                          <button
                            type="button"
                            className="btn btn-success btn-label right ms-auto nexttab nexttab"
                            onClick={() => {
                              toggleArrowTab(activeArrowTab + 1);
                            }}
                          >
                            <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                            Go to edit door
                          </button>
                        </div>
                      </TabPane>

                      <TabPane id="steparrow-description-info" tabId={5}>
                        <div>
                          {/* <div className="mb-3">
                            <Label htmlFor="formFile" className="form-label">
                              Upload Image
                            </Label>
                            <Input
                              className="form-control"
                              type="file"
                              id="formFile"
                            />
                          </div> */}
                          <div>
                            <Label
                              className="form-label"
                              htmlFor="des-info-description-input"
                            >

                            </Label>
                            <Upload />
                            {/* <textarea
                              className="form-control"
                              placeholder="Enter Description"
                              
                              id="des-info-description-input"
                              rows="3"
                            >
                           
                            </textarea> */}
                          </div>
                          <div className="doormodel">
                            <h4>Door models</h4>
                            <div className="btnpart">
                            
                                <img className="btn_1" src={logo1} onClick={() => imageClick1()} />                           
                         
                                <img className="btn_2" src={logo2} onClick={() => imageClick2()} />
                        
                                <img className="btn_3" src={logo3} onClick={() => imageClick3()} />
                       
                                <img className="btn_4" src={logo4} onClick={() => imageClick4()} />
                          
                                <img className="btn_5" src={logo5} onClick={() => imageClick5()} />
                          
                                <img className="btn_6" src={logo6} onClick={() => imageClick6()} />
                              
                                <img className="btn_7" src={logo7} onClick={() => imageClick7()} />
                         
                                <img className="btn_8" src={logo8} onClick={() => imageClick8()} />
                         
                                <img className="btn_9" src={logo9} onClick={() => imageClick9()} />
                       
                                <img className="btn_10" src={logo10} onClick={() => imageClick10()} />
                       
                                <img className="btn_11" src={logo11} onClick={() => imageClick11()} />
                   
                                <img className="btn_12" src={logo12} onClick={() => imageClick12()} />
                     
                                <img className="btn_13" src={logo13} onClick={() => imageClick13()} />
                 
                                <img className="btn_14" src={logo14} onClick={() => imageClick14()} />
                     
                                <img className="btn_15" src={logo15} onClick={() => imageClick15()} />
                        
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-start gap-3 mt-4">
                          <button
                            type="button"
                            className="btn btn-light btn-label previestab"
                            onClick={() => {
                              toggleArrowTab(activeArrowTab - 1);
                            }}
                          >
                            <i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i>{" "}
                            Back to Select Client
                          </button>
                          <button
                            type="button"
                            className="btn btn-success btn-label right ms-auto nexttab nexttab"
                            onClick={() => {
                              toggleArrowTab(activeArrowTab + 1);
                            }}
                          >
                            <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                            Finish
                          </button>
                        </div>
                      </TabPane>

                      <TabPane id="pills-experience" tabId={6}>
                        <div className="text-center">
                          <div className="avatar-md mt-5 mb-4 mx-auto">
                            <div className="avatar-title bg-light text-success display-4 rounded-circle">
                              <i className="ri-checkbox-circle-fill"></i>
                            </div>
                          </div>
                          <Col lg={6}>
                            <select className="form-select mb-3" aria-label="Default select example">
                              <option defaultValue="1">250 CM HOOGTE x 150 CM BREEDTE</option>
                              <option defaultValue="1">275 CM HOOGTE x 175 CM BREEDTE</option>
                              <option defaultValue="1">300 CM HOOGTE x 200 CM BREEDTE</option>
                            </select>
                          </Col>
                          <Button>done</Button>
                          <p className="text-muted">
                            You have Successfully Select Door Model
                          </p>
                        </div>
                      </TabPane>
                    </TabContent>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>

        </Container>
      </div>
    </React.Fragment>
  );
};

export default FormWizard;
