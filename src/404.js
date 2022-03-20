import { Link } from "react-router-dom";
import { Button, ErrorText, Icons } from "./styles/elements";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, ErrorContent, Section } from "./styles/containers";

const NotFound = () => {
  return (
    <>
      <Container>
        <Section>
          <ErrorContent>
            <ErrorText>404: This page could not be found</ErrorText>

            <Link to="/">
              <Button>
                <Icons>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </Icons>
                Go Back
              </Button>
            </Link>
          </ErrorContent>
        </Section>
      </Container>
    </>
  );
};
export default NotFound;
