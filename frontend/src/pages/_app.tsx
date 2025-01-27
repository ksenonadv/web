//                                                                            //
//                                           #@@@@@@@@@/                      //
//                                      (@@%%%%%%%%%%%%%%&@%                  //
//                                   %@%%%%%%%%%%%%%%%%%%%%%&@(               //
//                                 (@%%%%%%%%%%%%%%%%%%%%%%%%%%@(             //
//                               %@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%&%            //
//                              %&%%%%%%%%%%%%%%%%%%&@@%%%%%%%%%%&@#          //
//                            .@&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%///*/@@/     //
//                            @%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#///////*#@.  //
//                           @&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%////*/&@@,   //
//                          (@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%(#@%/        //
//                          &%%%%%%%%%%%%%%%%%%%%%%%%%&@@@@&(/.  &(           //
//                         *&%%%%%%%%%%%%%%%%%%%%%%@%           ,@            //
//                        .@&%%%%%%%%%%%%%%%%%%%%@,             @.            //
//                        @@%%%%%%%%%%%%%%%%%%%&#              (&             //
//                       .@%%%%%%%%%%%%%%%%%%%&#               @%             //
//                       &&%%%%%%%%%%%%%%%%%%@#               .@(             //
//                      @@%%%%%%%%%%%%%%%%%%&#                *@,             //
//                     #@%%%%%%%%%%%%%%%%%%&@,                /@              //
//                    ,@%%%%%%%%%%%%%%%%%%%@#                 (@              //
//                   ,@%%%%%%%%%%%%%%%%%%%&#                  (&              //
//                   @&%%%%%%%%%%%%%%%%%%%%                   (@              //
//                  &%%%%%%%%%%%%%%%%%%%%%%%                  *@.             //
//                 @@%%%%%%%%%%%%%%%%%%%%%%@.                 ,@*             //
//                #&%%%%%%%%%%%%%%%%%%%%%%%@(                 .@(             //
//               (@%%%%%%%%%%%%%%%%%%%%%%%%@(.                 @#             //
//              #@%%%%%%%%%%%%%%%%%%%%%%%%%@/..                @%             //
//             ,@%%%%%%%%%%%%%&%%%%%%%%%%%%@..                 @%             //
//            (@%%%%%%%%%%%%%%&@%%%%%%%%%%@/ .                .@(             //
//           (@%%%%%%%%%%%%%%%%&@%%%%%%%%&@ .                 ,@*             //
//          /@%%%%%%%%%%%%%%%%%%%@&%%%%%%@/..                 (@              //
//         /@%%%%%%%%%%%%%%%%%%@,.@&%%%%@,.                   #(              //
//        .@%%%%%%%%%%%%%%%%%%@  . #@%@@..                    @*              //
//        @%%%%%%%%%%%%%%%%%&@,    .. ..                     (#               //
//       @&%%%%%%%%%%%%%%%%%#                               /@.               //
//     .@&%%%%%%%%%%%%%%%%@&                                &/                //
//   (@&%%%%%%%%%%%%%%%%%@                                 @,                 //
// /@%%%%%%%%%%%%%%%%%%&*                                *@*                  //
// /@%%%%%%%%%%%%%%&@.                                  %#                    //
//    #%@&%%%%%%@%.                                   ,@*                     //
//         ,&@&                                     /@#//&@/                  //
//              *#&@(*,                        .*#&%/////(##@/                //
//        ........... @(*#&@@@@@@(/////#@@@@&@* ..,*/#%@@@%.,,,.              //
//        .............%&#(/////////////////(##&&.,,,.,,.,...                 //
//                     .,.. ,(&@@%/*,#@@@@@@@,,,,,.                           //
//                           ..........,,,.,...                               //
//                                                                            //
//                              For Edmund.                                   //
//                              2021-04-11                                    //
//                                                                            //

import type { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import { DefaultSeo } from "next-seo";
import { ToastContainer } from "react-nextjs-toast";
import NProgress from "nprogress";
import { ChakraProvider, Box, Heading, Text } from "@chakra-ui/react";

import Nav from "src/components/site/Nav";
import Footer from "src/components/site/Footer";

import "normalize.css";
import "tachyons/css/tachyons.min.css";
import "nprogress/nprogress.css";
import "remark-admonitions/styles/classic.css";

import "src/styles/base.css";
import { AuthProvider } from "src/auth/hooks";
import theme from "../styles/theme";
import Fonts from "src/styles/Fonts";
import React, { FC } from "react";
import { NextPage } from "next";
import Link from "next/link";
import Measured from "src/components/generic/Measured";
import Anchor from "src/components/generic/Anchor";

// Trigger client-side progress bar for client-side page transitions.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const App: NextPage<AppProps> = ({ Component, pageProps, router }) => (
  <ChakraProvider theme={theme}>
    <Fonts />
    <Head>
      <div
        dangerouslySetInnerHTML={{
          __html: `<!--
//                                                                            //
//                                           #@@@@@@@@@/                      //
//                                      (@@%%%%%%%%%%%%%%&@%                  //
//                                   %@%%%%%%%%%%%%%%%%%%%%%&@(               //
//                                 (@%%%%%%%%%%%%%%%%%%%%%%%%%%@(             //
//                               %@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%&%            //
//                              %&%%%%%%%%%%%%%%%%%%&@@%%%%%%%%%%&@#          //
//                            .@&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%///*/@@/     //
//                            @%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#///////*#@.  //
//                           @&%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%////*/&@@,   //
//                          (@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%(#@%/        //
//                          &%%%%%%%%%%%%%%%%%%%%%%%%%&@@@@&(/.  &(           //
//                         *&%%%%%%%%%%%%%%%%%%%%%%@%           ,@            //
//                        .@&%%%%%%%%%%%%%%%%%%%%@,             @.            //
//                        @@%%%%%%%%%%%%%%%%%%%&#              (&             //
//                       .@%%%%%%%%%%%%%%%%%%%&#               @%             //
//                       &&%%%%%%%%%%%%%%%%%%@#               .@(             //
//                      @@%%%%%%%%%%%%%%%%%%&#                *@,             //
//                     #@%%%%%%%%%%%%%%%%%%&@,                /@              //
//                    ,@%%%%%%%%%%%%%%%%%%%@#                 (@              //
//                   ,@%%%%%%%%%%%%%%%%%%%&#                  (&              //
//                   @&%%%%%%%%%%%%%%%%%%%%                   (@              //
//                  &%%%%%%%%%%%%%%%%%%%%%%%                  *@.             //
//                 @@%%%%%%%%%%%%%%%%%%%%%%@.                 ,@*             //
//                #&%%%%%%%%%%%%%%%%%%%%%%%@(                 .@(             //
//               (@%%%%%%%%%%%%%%%%%%%%%%%%@(.                 @#             //
//              #@%%%%%%%%%%%%%%%%%%%%%%%%%@/..                @%             //
//             ,@%%%%%%%%%%%%%&%%%%%%%%%%%%@..                 @%             //
//            (@%%%%%%%%%%%%%%&@%%%%%%%%%%@/ .                .@(             //
//           (@%%%%%%%%%%%%%%%%&@%%%%%%%%&@ .                 ,@*             //
//          /@%%%%%%%%%%%%%%%%%%%@&%%%%%%@/..                 (@              //
//         /@%%%%%%%%%%%%%%%%%%@,.@&%%%%@,.                   #(              //
//        .@%%%%%%%%%%%%%%%%%%@  . #@%@@..                    @*              //
//        @%%%%%%%%%%%%%%%%%&@,    .. ..                     (#               //
//       @&%%%%%%%%%%%%%%%%%#                               /@.               //
//     .@&%%%%%%%%%%%%%%%%@&                                &/                //
//   (@&%%%%%%%%%%%%%%%%%@                                 @,                 //
// /@%%%%%%%%%%%%%%%%%%&*                                *@*                  //
// /@%%%%%%%%%%%%%%&@.                                  %#                    //
//    #%@&%%%%%%@%.                                   ,@*                     //
//         ,&@&                                     /@#//&@/                  //
//              *#&@(*,                        .*#&%/////(##@/                //
//        ........... @(*#&@@@@@@(/////#@@@@&@* ..,*/#%@@@%.,,,.              //
//        .............%&#(/////////////////(##&&.,,,.,,.,...                 //
//                     .,.. ,(&@@%/*,#@@@@@@@,,,,,.                           //
//                           ..........,,,.,...                               //
//                                                                            //
//                              For Edmund.                                   //
//                              2021-04-11                                    //
//                                                                            //
-->
`,
        }}
      ></div>
    </Head>

    {/* 
      Sets the default meta tags for all pages.
      https://github.com/garmeeh/next-seo
    */}
    <DefaultSeo
      title="Open Multiplayer"
      titleTemplate="open.mp | %s"
      description="An upcoming multiplayer mod for Grand Theft Auto: San Andreas that will be fully backwards compatible with the existing multiplayer mod San Andreas Multiplayer."
      canonical="https://open.mp"
      twitter={{
        cardType: "summary",
        site: "@openmultiplayer",
        handle: "@openmultiplayer",
      }}
    />

    {/* Toast notification positioning container */}
    <ToastContainer align="right" />

    <AuthProvider>
      <Nav
        items={[
          { name: "Home", path: "/", exact: true },
          { name: "FAQ", path: "/faq" },
          { name: "Forums", path: "/discussion" },
          { name: "Servers", path: "/servers" },
          { name: "Docs", path: "/docs" },
          { name: "Blog", path: "/blog" },
        ]}
        route={router.pathname}
      />

      <main>
        {/*
          NOTE: Temporary announcement for new forum.
        */}

        <Announcement />

        {/*
          Remove once feedback and testing is done.
        */}

        <Component {...pageProps} />
      </main>

      <Footer />
    </AuthProvider>

    <style jsx global>{`
      html,
      body,
      #__next {
        height: 100%;
      }
      #__next {
        display: flex;
        flex-direction: column;
      }
      main {
        flex: 1 0 auto;
      }
    `}</style>
  </ChakraProvider>
);

const Announcement: FC = () => {
  return (
    <Box maxWidth="48em" mx="auto" px="0.5em">
      <Box
        padding="0.8em"
        borderColor="blackAlpha.100"
        borderStyle="solid"
        borderWidth="1px"
        borderRadius="0.5em"
        backgroundColor="blue.50"
      >
        <Heading m="0" fontSize="1.5em">
          New Forums!
        </Heading>

        <Text>
          Please check out our{" "}
          <Anchor href="/discussion">brand new forums</Anchor> and help test!
        </Text>

        <Text>
          More information is available{" "}
          <Anchor href="/discussion/ckwf1z1o900698rw556q3p9e0-a-post">
            here!
          </Anchor>
        </Text>
      </Box>
    </Box>
  );
};

export default App;
