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
    <HStack justify="center" flexWrap="wrap" gap={4}>
      {links.map((exp) => (
      <Link
        key={exp.text + "-link"}
        href={exp.href}
        target="_blank"
        flexBasis={["100%", "20%"]}
      >
            <Button colorScheme="gray" variant="outline" width="100%">
                {exp.icon} {exp.text}
            </Button>
        </Link>
      ))}
    </HStack>
);

export default Links;