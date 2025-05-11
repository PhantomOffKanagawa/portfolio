import { Box, IconButton, Link } from "@chakra-ui/react";
import { githubUrl } from "@utils/homepage-values";
import { Github } from "lucide-react";

type FloatingGithubLinkProps = {
    link?: string;
    text?: string;
};

const FloatingGithubLink = ({ link, text }: FloatingGithubLinkProps) => {
    return (
        <Link
            href={link || githubUrl}
            position="fixed"
            bottom={6}
            right={6}
            zIndex={1000000}
            borderRadius="full"
            boxShadow="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <IconButton
                aria-label="GitHub"
                borderRadius="full"
                variant="ghost"
                size="2xl"
                px={{ base: 0, lg: 6 }}
            >
                <Github color="currentColor" />
            <Box
                display={{ base: "none", lg: "flex" }}
                fontWeight="semibold"
                fontSize="lg"
                color="bg.inverse"
            >
                {text || "Source"}
            </Box>
            </IconButton>
        </Link>
    );
};

export default FloatingGithubLink;