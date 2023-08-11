import React from "react";
import { styled } from "styled-components";

const LoadSection = styled.section`
background-color: #15212a !important;
padding: 135px 0;
z-index: 0;
position: relative;
`;

const Service = styled.div`
font-family: sans-serif !important;
`;

const SectionHeading = styled.h2`
    margin-top: 0!important;
    margin-bottom: 20px!important;
    text-transform: capitalize!important;
    position: relative!important;
    display: inline-block!important;
    line-height: 52px!important;
    color: #fff;
    text-align: center;
`;

const SectionSubH = styled.p`
    position: relative!important;
    color: #fff;
    font-size: 20px!important;
    line-height: 34px!important;
    text-align: center;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;


const LoadBalance = () => {
    return(
        <LoadSection>
            <Service>
                <div className="container">
                    <div class = "row">
                        <div class = "col-md-12 text-center">
                            <SectionHeading>Cloud Load Balancing</SectionHeading>
                                <SectionSubH>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla tincidunt urna, at tempor libero.</SectionSubH>
                        </div>
                        <div className="col-md-12">
                        <ImageWrapper>
                            <img
                            src="http://inebur.com/antler/template/assets/patterns/balancing.svg"
                            alt="Load Balancer"
                            />
                            <div className="row text-info text-center">
                              <div className="col-md-4 pb-4 pt-5">
                                <b className="pink">[1] Users</b>
                                <br/>
                                <span className="info seccolor">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>
                               </div>
                               <div className="col-md-4 pb-4 pt-5">
                                <b className="pink">[2] Load Balancing</b>
                                <br/>
                                <span className="info seccolor">Eaque ipsa quae ab illo inventore veritatis et quasi. Eaque ipsa quae omnis iste</span>
                               </div>
                               <div className="col-md-4 pb-4 pt-5">
                                <b className="pink">[3] Cloud Servers</b>
                                <br/>
                                <span className="info seccolor">Omnis iste natus error sit voluptatem accusantium doloremque laudantium.</span>
                               </div>
                            </div>
                        </ImageWrapper>
                        </div>

                    </div>
                </div>
            </Service>
        </LoadSection>
    );
};

export default LoadBalance;