import Link from "next/link";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer id="footer" className="">
      <h2 className="">
        <span className="">Domo</span> <span className="">ARIGATO</span>
      </h2>

      <Button asChild variant="purple" className="">
        <Link href={"#"}>VIEW ON OPENSEA</Link>
      </Button>

      <div className="">
        <p>
          Follow Robotos on{" "}
          <a
            target="_blank"
            href="https://twitter.com/robotosnft"
            rel="noreferrer"
          >
            <strong>Twitter</strong>
          </a>{" "}
          or{" "}
          <strong>
            <a
              target="_blank"
              href="https://robots-nft-minting-website.webflow.io/your-stuff#"
              rel="noreferrer"
            >
              Discord
            </a>{" "}
            <a
              target="_blank"
              href="https://robots-nft-minting-website.webflow.io/your-stuff#"
              rel="noreferrer"
            >
              Smart Contract
            </a>
          </strong>
        </p>
      </div>
    </footer>
  );
}
