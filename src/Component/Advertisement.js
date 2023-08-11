import React from 'react';
import styled from 'styled-components';

const PartnersSection = styled.section`
  padding: 20px 0;
  background-color: #0047AB;
`;

const ContainerXL = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const PartnerCarousel = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PartnerItem = styled.div`
  flex: 0 0 calc(20% - 15px); /* Adjust the width and gap as needed */
  margin: 7.5px;
`;

const PartnerImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const Advertise = () => {
  return (
    <PartnersSection id="partners">
      <ContainerXL>
        <div className="col-md-12">
          <div id="partnersCarousel" className="carousel slide">
            <div className="carousel-inner">
              {/* Begin Partner Row */}
              <div className="item active">
                <PartnerCarousel>
                  <PartnerItem>
                    <PartnerImage src="https://www.asurahosting.in/assets/partners/sectigo.svg" alt="Sectigo Logo" />
                  </PartnerItem>
                  <PartnerItem>
                    <PartnerImage src="https://www.asurahosting.in/assets/partners/litespeed.svg" alt="Litespeed Logo" />
                  </PartnerItem>
                  <PartnerItem>
                    <PartnerImage src="https://www.asurahosting.in/assets/partners/cloudlinux.svg" alt="Cloudlinux Logo" />
                  </PartnerItem>
                  <PartnerItem>
                    <PartnerImage src="https://www.asurahosting.in/assets/partners/softaculous.svg" alt="Softaculous Logo" />
                  </PartnerItem>
                  <PartnerItem>
                    <PartnerImage src="https://www.asurahosting.in/assets/partners/cloudflare.svg" alt="Cloudflare Logo" />
                  </PartnerItem>
                </PartnerCarousel>
              </div>
              {/* End Partner Row */}
            </div>
          </div>
        </div>
      </ContainerXL>
    </PartnersSection>
  );
};

export default Advertise;