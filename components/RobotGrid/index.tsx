import { itemsGrid } from "@/constants";
import Card from "../Cards/Card";
import Container from "../Container";
import SectionTitle from "../SectionTitle";
import CardSimple from "../Cards/CardSimple";

export default function RobotGrid() {
  return (
    <section className="">
      <Container>
        <Card className="">
          <div className="">
            <SectionTitle as="h1" className="">
              Your Stuff
            </SectionTitle>

            <p>
              {`Here's a list of all robotos you own. Click to see the different
        assets.`}
            </p>
          </div>

          <div className="">
            {itemsGrid.map(({ image, text }, index) => (
              <CardSimple key={index} image={image} text={text} />
            ))}
          </div>
        </Card>
      </Container>
    </section>
  );
}
