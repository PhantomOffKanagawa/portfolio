import React from "react";
import { Button, HStack, Link } from "@chakra-ui/react";

interface LinkProps {
  links: {
    text: string,
    href: string,
    icon: React.ReactNode,
  }[];
}

const Links: React.FC<LinkProps> = ({ links }) => (
    <HStack justify="center">
      {links.map((exp) => (
        <Link href={exp.href} target="_blank">
            <Button colorScheme="gray" variant="outline">
                {exp.icon} {exp.text}
            </Button>
        </Link>
      ))}
    </HStack>
);

export default Links;