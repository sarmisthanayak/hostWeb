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

const ImageDescription = styled.p`
  color: #fff;
  font-size: 16px;
  text-align: center;
  max-width: 500px;
  margin-top: 20px;
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
                            src="https://res.cloudinary.com/practicaldev/image/fetch/s--RV7__Frh--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://raw.githubusercontent.com/karanpratapsingh/portfolio/master/public/static/courses/system-design/chapter-I/load-balancing/load-balancer.png"
                            alt="Load Balancer"
                            />
                            <ImageDescription>
                            Illustration of a Load Balancer in a system design.
                            </ImageDescription>
                        </ImageWrapper>
                        </div>

                    </div>
                </div>
            </Service>
        </LoadSection>
    );
};

export default LoadBalance;