import Image from "next/image";
import Availability from "../Availability";
import Container from "../Container";
import { RobotHead } from "@/constants/images";
import SectionTitle from "../SectionTitle";
import { Button } from "../ui/button";
import Link from "next/link";
import Card from "../Cards/Card";

export default function GetRobots() {
  return (
    <section className="">
      <Container className="">
        <Card className="">
          {/* Image */}
          <div className="">
            <Image src={RobotHead} className="" alt="" fill />
          </div>

          {/* Card */}
          <div className="">
            <SectionTitle>GET YOUR ROBOTOS</SectionTitle>
            <div className="">
              <p>
                Robotos is a collection of droid characters designed by{" "}
                <a
                  target="_blank"
                  href="https://twitter.com/pablostanley"
                  rel="noreferrer"
                >
                  <strong>Pablo Stanley</strong>
                </a>{" "}
                and minted as NFTs. They are constructed from various metal
                outfits, tin faces, digital accessories, top pieces, faces,
                backpacks, arms, and colors. Get your own!
              </p>
            </div>

            <Button asChild>
              <Link href="#">MINT ROBOTOS</Link>
            </Button>
          </div>

          {/* Availability */}
          <Availability />
        </Card>
      </Container>
    </section>
  );
}
