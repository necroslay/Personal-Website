import React from "react";
import theme from "theme";
import { Theme, Link, Image, LinkBox, Box, Section, Text, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { FiMenu } from "react-icons/fi";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Grand Canyon Rafting Experience
			</title>
			<meta name={"description"} content={"Each day, you'll wake up to the smell of freshly brewed coffee, and the sounds of rushing water mingled with the murmur of sleepy voices echoing through the canyon walls."} />
			<meta property={"og:title"} content={"Grand Canyon Rafting Experience"} />
			<meta property={"og:description"} content={"Each day, you'll wake up to the smell of freshly brewed coffee, and the sounds of rushing water mingled with the murmur of sleepy voices echoing through the canyon walls."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/og%20img.png?v=2021-10-13T09:16:11.796Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/noto_snow-capped-mountain.png?v=2021-10-13T09:17:21.731Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/noto_snow-capped-mountain127.png?v=2021-10-13T09:17:28.297Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/noto_snow-capped-mountain127.png?v=2021-10-13T09:17:28.297Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/noto_snow-capped-mountain127.png?v=2021-10-13T09:17:28.297Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/noto_snow-capped-mountain127.png?v=2021-10-13T09:17:28.297Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/og%20img.png?v=2021-10-13T09:16:11.796Z"} />
			<meta name={"msapplication-TileColor"} content={"#232323"} />
		</Helmet>
		<Section quarkly-title="Header" padding="44px 0 44px 0">
			<Override slot="SectionContent" flex-direction="row" justify-content="space-between" />
			<LinkBox align-items="flex-start">
				<Image
					src="https://uploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/logo.png?v=2021-10-13T10:30:43.604Z"
					width="192px"
					height="auto"
					lg-max-width="150px"
					srcSet="https://smartuploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/logo.png?v=2021-10-13T10%3A30%3A43.604Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/logo.png?v=2021-10-13T10%3A30%3A43.604Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/logo.png?v=2021-10-13T10%3A30%3A43.604Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/logo.png?v=2021-10-13T10%3A30%3A43.604Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/logo.png?v=2021-10-13T10%3A30%3A43.604Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/logo.png?v=2021-10-13T10%3A30%3A43.604Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/logo.png?v=2021-10-13T10%3A30%3A43.604Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</LinkBox>
			<Components.QuarklycommunityKitMobileSidePanel>
				<Override slot="Content" background="rgba(255, 255, 255, 0)" padding="0px 0px 0px 0px" md-background="--color-dark" />
				<Override slot="Button Icon" md-color="--green" />
				<Override slot="Button Text" md-display="none" />
				<Override slot="Button Icon :closed" category="fi" icon={FiMenu} />
				<Override slot="Cross" md-color="--light" />
				<Box
					display="flex"
					justify-content="flex-end"
					md-align-items="center"
					md-flex-direction="column"
					md-justify-content="center"
					md-padding="30px 0px 30px 0px"
				>
					<Link
						transition="color 0.3s --transitionTimingFunction-easeInOut 0s"
						border-width="1px 0px 0px 0px"
						lg-margin="0px 16px 0px 0px"
						text-decoration-line="initial"
						md-margin="0px 0px 7px 0px"
						href="#"
						color="--light"
						padding="6px 0px 6px 0px"
						hover-color="--green"
						hover-border-color="--color-green"
						font="--base"
						margin="0px 16px 0px 16px"
						border-style="solid"
						border-color="rgba(255, 255, 255, 0)"
					>
						Horseshoe bend rafting
					</Link>
					<Link
						md-margin="0px 0px 7px 0px"
						text-decoration-line="initial"
						font="--base"
						padding="6px 0px 6px 0px"
						hover-color="--green"
						transition="color 0.3s --transitionTimingFunction-easeInOut 0s"
						lg-margin="0px 16px 0px 0px"
						color="--light"
						border-width="1px 0px 0px 0px"
						border-style="solid"
						border-color="rgba(255, 255, 255, 0)"
						href="#"
						margin="0px 16px 0px 16px"
						hover-border-color="--color-green"
					>
						Grand canyon rafting
					</Link>
					<Link
						border-width="1px 0px 0px 0px"
						lg-margin="0px 0px 0px 0px"
						href="#"
						hover-color="--green"
						font="--base"
						padding="6px 0px 6px 0px"
						margin="0px 0px 0px 16px"
						transition="color 0.3s --transitionTimingFunction-easeInOut 0s"
						hover-border-color="--color-green"
						border-style="solid"
						text-decoration-line="initial"
						color="--light"
						border-color="rgba(255, 255, 255, 0)"
					>
						Special offers
					</Link>
				</Box>
			</Components.QuarklycommunityKitMobileSidePanel>
		</Section>
		<Section padding="36px 0 60px 0" quarkly-title="HeroBlock" md-padding="16px 0 30px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" flex-wrap="wrap" />
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="60%"
				md-width="100%"
			>
				<Text
					font="--headline1"
					color="--light"
					margin="0px 0px 0px 0px"
					lg-font="normal 700 50px/1.2 &quot;Quicksand&quot;, sans-serif"
					md-font="normal 700 40px/1.2 &quot;Quicksand&quot;, sans-serif"
					md-margin="0px 0px 24px 0px"
				>
					Page not found, Error 404{"\n\n"}
				</Text>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="40%"
				md-width="100%"
				empty-min-width="64px"
			>
				<Text
					color="--light"
					font="--lead"
					text-align="justify"
					lg-font="normal 600 16px/1.5 &quot;Varta&quot;, sans-serif"
					lg-margin="80px 0px 0px 0px"
					md-margin="0px 0px 0px 0px"
					margin="100px 0px 0px 0px"
				>
					This link is broken or the page has been moved. Try these pages instead:{"\n\n"}
				</Text>
				<Box md-margin="24px 0px 0px 0px" margin="28px 0px 0px 0px" display="flex" lg-margin="24px 0px 16px 0px">
					<Link
						transition="color 0.3s --transitionTimingFunction-easeInOut 0s"
						border-style="solid"
						lg-font="normal 400 16px/1.5 &quot;Varta&quot;, sans-serif"
						href="#"
						font="--base"
						margin="0px 32px 0px 0px"
						border-width="1px 0px 0px 0px"
						padding="6px 0px 6px 0px"
						hover-border-color="--color-green"
						border-color="rgba(255, 255, 255, 0)"
						text-decoration-line="initial"
						color="--light"
						hover-color="--green"
						lg-margin="0px 16px 0px 0px"
					>
						Discover
					</Link>
					<Link
						border-color="rgba(255, 255, 255, 0)"
						lg-margin="0px 16px 0px 0px"
						text-decoration-line="initial"
						border-width="1px 0px 0px 0px"
						font="--base"
						lg-font="normal 400 16px/1.5 &quot;Varta&quot;, sans-serif"
						href="#"
						transition="color 0.3s --transitionTimingFunction-easeInOut 0s"
						margin="0px 32px 0px 0px"
						hover-color="--green"
						hover-border-color="--color-green"
						border-style="solid"
						color="--light"
						padding="6px 0px 6px 0px"
					>
						Payment
					</Link>
					<Link
						margin="0px 32px 0px 0px"
						border-color="rgba(255, 255, 255, 0)"
						color="--light"
						font="--base"
						hover-border-color="--color-green"
						border-width="1px 0px 0px 0px"
						border-style="solid"
						lg-font="normal 400 16px/1.5 &quot;Varta&quot;, sans-serif"
						lg-margin="0px 16px 0px 0px"
						href="#"
						text-decoration-line="initial"
						padding="6px 0px 6px 0px"
						hover-color="--green"
						transition="color 0.3s --transitionTimingFunction-easeInOut 0s"
					>
						Services
					</Link>
					<Link
						margin="0px 32px 0px 0px"
						hover-border-color="--color-green"
						lg-font="normal 400 16px/1.5 &quot;Varta&quot;, sans-serif"
						font="--base"
						hover-color="--green"
						border-width="1px 0px 0px 0px"
						href="#"
						padding="6px 0px 6px 0px"
						lg-margin="0px 16px 0px 0px"
						text-decoration-line="initial"
						color="--light"
						transition="color 0.3s --transitionTimingFunction-easeInOut 0s"
						border-style="solid"
						border-color="rgba(255, 255, 255, 0)"
					>
						Insurance
					</Link>
				</Box>
			</Box>
			<Image
				object-fit="cover"
				object-position="0% 85%"
				lg-max-height="400px"
				sm-max-height="250px"
				margin="40px 0px 0px 0px"
				width="100%"
				src="https://images.unsplash.com/photo-1544453850-eaea85b2ae36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
				max-height="600px"
				srcSet="https://images.unsplash.com/photo-1544453850-eaea85b2ae36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1544453850-eaea85b2ae36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1544453850-eaea85b2ae36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1544453850-eaea85b2ae36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1544453850-eaea85b2ae36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1544453850-eaea85b2ae36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1544453850-eaea85b2ae36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
		</Section>
		<Section padding="80px 0 160px 0" md-padding="30px 0 30px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="60%"
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
			>
				<Image
					width="192px"
					height="auto"
					lg-max-width="150px"
					src="https://uploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/logo.png?v=2021-10-13T10:30:43.604Z"
					srcSet="https://smartuploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/logo.png?v=2021-10-13T10%3A30%3A43.604Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/logo.png?v=2021-10-13T10%3A30%3A43.604Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/logo.png?v=2021-10-13T10%3A30%3A43.604Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/logo.png?v=2021-10-13T10%3A30%3A43.604Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/logo.png?v=2021-10-13T10%3A30%3A43.604Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/logo.png?v=2021-10-13T10%3A30%3A43.604Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/logo.png?v=2021-10-13T10%3A30%3A43.604Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Box margin="28px 0px 52px 0px" display="flex" lg-margin="24px 0px 16px 0px">
					<Link
						font="--base"
						transition="color 0.3s --transitionTimingFunction-easeInOut 0s"
						hover-border-color="--color-green"
						border-width="1px 0px 0px 0px"
						border-color="rgba(255, 255, 255, 0)"
						lg-font="normal 400 16px/1.5 &quot;Varta&quot;, sans-serif"
						href="#"
						padding="6px 0px 6px 0px"
						hover-color="--green"
						lg-margin="0px 16px 0px 0px"
						text-decoration-line="initial"
						color="--light"
						margin="0px 32px 0px 0px"
						border-style="solid"
					>
						Discover
					</Link>
					<Link
						lg-margin="0px 16px 0px 0px"
						color="--light"
						padding="6px 0px 6px 0px"
						transition="color 0.3s --transitionTimingFunction-easeInOut 0s"
						hover-border-color="--color-green"
						border-color="rgba(255, 255, 255, 0)"
						margin="0px 32px 0px 0px"
						font="--base"
						border-width="1px 0px 0px 0px"
						href="#"
						text-decoration-line="initial"
						hover-color="--green"
						border-style="solid"
						lg-font="normal 400 16px/1.5 &quot;Varta&quot;, sans-serif"
					>
						Payment
					</Link>
					<Link
						margin="0px 32px 0px 0px"
						hover-border-color="--color-green"
						border-width="1px 0px 0px 0px"
						transition="color 0.3s --transitionTimingFunction-easeInOut 0s"
						border-color="rgba(255, 255, 255, 0)"
						href="#"
						text-decoration-line="initial"
						padding="6px 0px 6px 0px"
						border-style="solid"
						lg-font="normal 400 16px/1.5 &quot;Varta&quot;, sans-serif"
						lg-margin="0px 16px 0px 0px"
						color="--light"
						font="--base"
						hover-color="--green"
					>
						Services
					</Link>
					<Link
						lg-margin="0px 16px 0px 0px"
						hover-border-color="--color-green"
						border-color="rgba(255, 255, 255, 0)"
						color="--light"
						border-style="solid"
						href="#"
						text-decoration-line="initial"
						border-width="1px 0px 0px 0px"
						lg-font="normal 400 16px/1.5 &quot;Varta&quot;, sans-serif"
						font="--base"
						padding="6px 0px 6px 0px"
						transition="color 0.3s --transitionTimingFunction-easeInOut 0s"
						margin="0px 32px 0px 0px"
						hover-color="--green"
					>
						Insurance
					</Link>
				</Box>
				<Box md-margin="28px 0px 0px 0px" margin="28px 0px 0px 0px" display="flex">
					<Link
						href="#"
						font="--base"
						hover-color="--green"
						transition="color 0.3s --transitionTimingFunction-easeInOut 0s"
						hover-border-color="--color-green"
						border-color="rgba(255, 255, 255, 0)"
						lg-margin="0px 16px 0px 0px"
						border-width="1px 0px 0px 0px"
						color="--grey"
						padding="6px 0px 6px 0px"
						border-style="solid"
						lg-font="normal 400 16px/1.5 &quot;Varta&quot;, sans-serif"
						text-decoration-line="initial"
						margin="0px 32px 0px 0px"
					>
						Customer service 24/7
					</Link>
					<Link
						lg-font="normal 400 16px/1.5 &quot;Varta&quot;, sans-serif"
						text-decoration-line="initial"
						color="--grey"
						margin="0px 32px 0px 0px"
						transition="color 0.3s --transitionTimingFunction-easeInOut 0s"
						border-width="1px 0px 0px 0px"
						border-style="solid"
						href="#"
						font="--base"
						padding="6px 0px 6px 0px"
						hover-color="--green"
						hover-border-color="--color-green"
						border-color="rgba(255, 255, 255, 0)"
					>
						Contact
					</Link>
				</Box>
			</Box>
			<Box
				md-width="100%"
				md-margin="24px 0px 0px 0px"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="40%"
			>
				<Text
					md-text-align="left"
					margin="0px 0px 26px 0px"
					color="--light"
					font="--headline4"
					text-align="right"
					lg-font="700 22px/1.2 &quot;Quicksand&quot;, sans-serif"
				>
					Let’s stay in touch
				</Text>
				<Components.QuarklycommunityKitNetlifyForm justify-content="flex-end" md-justify-content="flex-start" display="flex" align-items="center">
					<Override slot="Form" display="flex" align-items="center" justify-content="center" />
					<Input
						placeholder="Give us your phone..."
						type="tel"
						background="rgba(255, 255, 255, 0)"
						border-width="1px"
						border-color="--color-green"
						color="--grey"
						border-radius="0px"
						name="Phone"
						padding="12px 16px 10px 16px"
						required
					/>
					<Button
						width="56px"
						height="51px"
						position="relative"
						background="--color-green url(https://uploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/arrow_right_alt.png?v=2021-10-14T12:16:06.886Z) center center/auto no-repeat"
						color="rgba(255, 255, 255, 0)"
						top="-1px"
						border-radius="0px"
						hover-opacity=".8"
						transition="opacity 0.3s --transitionTimingFunction-easeInOut 0s"
					>
						.
					</Button>
				</Components.QuarklycommunityKitNetlifyForm>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6166a2b829a0a1001e6ca5fb"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});