import React from "react";
import theme from "theme";
import { Theme, Link, Image, LinkBox, Box, Section, Text, Span, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { FiMenu } from "react-icons/fi";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
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
					md-justify-content="center"
					md-padding="30px 0px 30px 0px"
					display="flex"
					justify-content="flex-end"
					md-align-items="center"
					md-flex-direction="column"
				>
					<Link
						border-style="solid"
						text-decoration-line="initial"
						padding="6px 0px 6px 0px"
						hover-color="--green"
						lg-margin="0px 16px 0px 0px"
						color="--light"
						hover-border-color="--color-green"
						border-width="1px 0px 0px 0px"
						href="#"
						transition="color 0.3s --transitionTimingFunction-easeInOut 0s"
						border-color="rgba(255, 255, 255, 0)"
						font="--base"
						margin="0px 16px 0px 16px"
						md-margin="0px 0px 7px 0px"
					>
						Horseshoe bend rafting
					</Link>
					<Link
						transition="color 0.3s --transitionTimingFunction-easeInOut 0s"
						href="#"
						padding="6px 0px 6px 0px"
						margin="0px 16px 0px 16px"
						text-decoration-line="initial"
						hover-border-color="--color-green"
						border-style="solid"
						color="--light"
						border-width="1px 0px 0px 0px"
						lg-margin="0px 16px 0px 0px"
						md-margin="0px 0px 7px 0px"
						font="--base"
						hover-color="--green"
						border-color="rgba(255, 255, 255, 0)"
					>
						Grand canyon rafting
					</Link>
					<Link
						padding="6px 0px 6px 0px"
						margin="0px 0px 0px 16px"
						hover-color="--green"
						transition="color 0.3s --transitionTimingFunction-easeInOut 0s"
						hover-border-color="--color-green"
						border-width="1px 0px 0px 0px"
						href="#"
						color="--light"
						border-color="rgba(255, 255, 255, 0)"
						border-style="solid"
						lg-margin="0px 0px 0px 0px"
						text-decoration-line="initial"
						font="--base"
					>
						Special offers
					</Link>
				</Box>
			</Components.QuarklycommunityKitMobileSidePanel>
		</Section>
		<Section padding="36px 0 60px 0" quarkly-title="HeroBlock" md-padding="16px 0 30px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
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
					lg-font="normal 700 50px/1.2 --fontFamily-googleAlegreyaSans, sans-serif"
					md-font="normal 700 40px/1.2 --fontFamily-googleAlegreyaSans, sans-serif"
					md-margin="0px 0px 24px 0px"
				>
					Grand Canyon River Rafting
				</Text>
			</Box>
			<Box
				empty-border-color="LightGray"
				width="50%"
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
			>
				<Text
					text-align="left"
					lg-font="normal 600 16px/1.5 &quot;Varta&quot;, sans-serif"
					lg-margin="80px 0px 0px 0px"
					md-margin="0px 0px 0px 0px"
					margin="100px 0px 0px 0px"
					color="--light"
					font="--lead"
				>
					<Span
						word-break="normal"
						text-indent="0"
						color="--green"
						overflow-wrap="normal"
						white-space="normal"
						text-overflow="clip"
						hyphens="manual"
					>
						Grand Canyon
					</Span>
					{" "}white water rafting is sure to leave an indelible impression: you'll have mind-blowing experience and moments of total serenity, get pure adrenaline, and feel a{" "}
					<Span color="--green">
						deep connection with nature
					</Span>
					{" "}around you. It's going to be a trip to remember!
				</Text>
			</Box>
		</Section>
		<Section padding="60px 0 60px 0">
			<Override slot="SectionContent" flex-direction="row" sm-flex-wrap="wrap" />
			<Box
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="50%"
				display="flex"
				sm-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
			>
				<Image
					min-width="600px"
					src="https://images.unsplash.com/photo-1543076499-a6133cb932fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
					max-height="600px"
					object-fit="cover"
					lg-max-height="350px"
					lg-max-width="100%"
					width="100%"
					lg-width="100%"
					lg-min-width="350px"
					srcSet="https://images.unsplash.com/photo-1543076499-a6133cb932fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1543076499-a6133cb932fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1543076499-a6133cb932fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1543076499-a6133cb932fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1543076499-a6133cb932fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1543076499-a6133cb932fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1543076499-a6133cb932fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				width="50%"
				background="--color-green"
				display="flex"
				flex-direction="column"
				lg-padding="24px 24px 24px 24px"
				empty-border-color="LightGray"
				align-items="center"
				justify-content="center"
				empty-min-width="64px"
				empty-border-style="solid"
				padding="86px 86px 86px 86px"
				sm-width="100%"
			>
				<Text
					margin="0px 0px 32px 0px"
					color="--dark"
					font="--headline4"
					lg-font="700 22px/1.2 --fontFamily-googleAlegreyaSans, sans-serif"
					lg-margin="0px 0px 16px 0px"
				>
					Learn About the Incredible Colorado River History
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					color="--dark"
					font="--base"
					text-align="left"
					lg-font="normal 400 16px/1.5 &quot;Varta&quot;, sans-serif"
				>
					You'll meet amazing new people and even make lifetime firnds. And you'll do it all with the help of the industry's most experienced guides.
				</Text>
			</Box>
		</Section>
		<Section padding="60px 0 60px 0" md-padding="30px 0 30px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				empty-min-width="64px"
				padding="0px 90px 0px 0px"
				md-padding="0px 0px 0px 0px"
				md-width="100%"
				width="50%"
				lg-padding="0px 28px 0px 0px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
			>
				<Text
					font="--headline2"
					lg-font="normal 500 32px/1.2 --fontFamily-googleAlegreyaSans, sans-serif"
					md-font="normal 500 28px/1.2 --fontFamily-googleAlegreyaSans, sans-serif"
					margin="0px 0px 32px 0px"
					color="--light"
				>
					Grand Canyon Rafting Best Offers
				</Text>
				<Text
					color="--light"
					font="--base"
					text-align="left"
					lg-font="normal 400 16px/1.5 &quot;Varta&quot;, sans-serif"
					md-margin="0px 0px 16px 0px"
					margin="0px 0px 0px 0px"
				>
					This Colorado Rafting Trip is for you if you're into rafting, with lots of white water rapids and long distances. You'll cover 188 river miles including 67 rated rapids in a Wilderness River Adventures motorized or oar-powered raft. You'll be able to boast of your experience for years!
				</Text>
			</Box>
			<Box
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="50%"
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
			>
				<Image
					src="https://images.unsplash.com/photo-1508166466920-f65aa51f727c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=940&q=80"
					width="100%"
					max-height="293px"
					object-fit="cover"
					lg-min-height="300px"
					md-max-height="277px"
					md-min-height="16px"
					srcSet="https://images.unsplash.com/photo-1508166466920-f65aa51f727c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1508166466920-f65aa51f727c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1508166466920-f65aa51f727c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1508166466920-f65aa51f727c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1508166466920-f65aa51f727c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1508166466920-f65aa51f727c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1508166466920-f65aa51f727c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
		</Section>
		<Section padding="24px 0 60px 0" md-padding="30px 0 30px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				width="50%"
				md-width="100%"
				md-align-items="center"
				md-justify-content="center"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				md-margin="0px 0px 30px 0px"
				empty-min-width="64px"
				empty-min-height="64px"
				md-display="flex"
			>
				<Image
					width="450px"
					height="450px"
					src="https://uploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/emojione_map-of-japan.png?v=2021-10-13T13:06:32.305Z"
					lg-width="320px"
					lg-height="320px"
					srcSet="https://smartuploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/emojione_map-of-japan.png?v=2021-10-13T13%3A06%3A32.305Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/emojione_map-of-japan.png?v=2021-10-13T13%3A06%3A32.305Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/emojione_map-of-japan.png?v=2021-10-13T13%3A06%3A32.305Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/emojione_map-of-japan.png?v=2021-10-13T13%3A06%3A32.305Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/emojione_map-of-japan.png?v=2021-10-13T13%3A06%3A32.305Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/emojione_map-of-japan.png?v=2021-10-13T13%3A06%3A32.305Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/emojione_map-of-japan.png?v=2021-10-13T13%3A06%3A32.305Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
			<Box
				flex-direction="column"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="50%"
				display="flex"
				justify-content="center"
				md-width="100%"
			>
				<Box display="flex" align-items="center" margin="0px 0px 16px 0px">
					<Box display="flex" align-items="center" width="40%">
						<Text font="--lead" lg-font="normal 600 20px/1.5 &quot;Varta&quot;, sans-serif" margin="0px 0px 0px 0px" color="--green">
							Starting point
						</Text>
					</Box>
					<Box display="flex" align-items="center" width="60%">
						<Text margin="0px 0px 0px 0px" color="--light" font="--base" lg-font="normal 400 16px/1.5 &quot;Varta&quot;, sans-serif">
							Lees Ferry
						</Text>
					</Box>
				</Box>
				<Box align-items="center" margin="0px 0px 16px 0px" display="flex">
					<Box display="flex" align-items="center" width="40%">
						<Text color="--green" font="--lead" lg-font="normal 600 20px/1.5 &quot;Varta&quot;, sans-serif" margin="0px 0px 0px 0px">
							Ending point
						</Text>
					</Box>
					<Box display="flex" align-items="center" width="60%">
						<Text margin="0px 0px 0px 0px" color="--light" font="--base" lg-font="normal 400 16px/1.5 &quot;Varta&quot;, sans-serif">
							Whitmore Wash
						</Text>
					</Box>
				</Box>
				<Box display="flex" align-items="center" margin="0px 0px 16px 0px">
					<Box display="flex" align-items="center" width="40%">
						<Text margin="0px 0px 0px 0px" color="--green" font="--lead" lg-font="normal 600 20px/1.5 &quot;Varta&quot;, sans-serif">
							Distance
						</Text>
					</Box>
					<Box width="60%" display="flex" align-items="center">
						<Text font="--base" lg-font="normal 400 16px/1.5 &quot;Varta&quot;, sans-serif" margin="0px 0px 0px 0px" color="--light">
							188 River Miles
						</Text>
					</Box>
				</Box>
				<Box display="flex" align-items="center" margin="0px 0px 16px 0px">
					<Box display="flex" align-items="center" width="40%">
						<Text lg-font="normal 600 20px/1.5 &quot;Varta&quot;, sans-serif" margin="0px 0px 0px 0px" color="--green" font="--lead">
							Rapids
						</Text>
					</Box>
					<Box align-items="center" width="60%" display="flex">
						<Text margin="0px 0px 0px 0px" color="--light" font="--base" lg-font="normal 400 16px/1.5 &quot;Varta&quot;, sans-serif">
							67
						</Text>
					</Box>
				</Box>
				<Box display="flex" align-items="center" margin="0px 0px 16px 0px">
					<Box align-items="center" width="40%" display="flex">
						<Text margin="0px 0px 0px 0px" color="--green" font="--lead" lg-font="normal 600 20px/1.5 &quot;Varta&quot;, sans-serif">
							Flight
						</Text>
					</Box>
					<Box display="flex" align-items="center" width="60%">
						<Text margin="0px 0px 0px 0px" color="--light" font="--base" lg-font="normal 400 16px/1.5 &quot;Varta&quot;, sans-serif">
							From Bar 10 Ranch to AZ or Las Vegas, NV
						</Text>
					</Box>
				</Box>
				<Box display="flex" align-items="flex-start" margin="0px 0px 16px 0px">
					<Box display="flex" align-items="center" width="40%">
						<Text font="--lead" lg-font="normal 600 20px/1.5 &quot;Varta&quot;, sans-serif" margin="0px 0px 0px 0px" color="--green">
							Equipment
						</Text>
					</Box>
					<Box display="flex" align-items="center" width="60%">
						<Text
							color="--light"
							font="--base"
							text-align="left"
							lg-font="normal 400 16px/1.5 &quot;Varta&quot;, sans-serif"
							margin="0px 0px 0px 0px"
						>
							Backpack blanket, Sleeping bag, cot, tent, camp chair, waterproof storage for camera and clothes, cup life jackets, all meals on the river, soft drinks, drinking water, and much more.{" "}
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="60px 0 40px 0" lg-padding="50px 0 25px 0" md-padding="30px 0 25px 0">
			<Override slot="SectionContent" align-items="flex-end" />
			<Text
				margin="0px 0px 16px 0px"
				color="--light"
				font="--headline2"
				lg-font="normal 500 28px/1.2 --fontFamily-googleAlegreyaSans, sans-serif"
				md-font="normal 500 22px/1.2 --fontFamily-googleAlegreyaSans, sans-serif"
				width="100%"
			>
				Join our 6-day Monitorized
			</Text>
			<Text
				color="--light"
				font="--headline2"
				lg-font="normal 500 28px/1.2 --fontFamily-googleAlegreyaSans, sans-serif"
				width="100%"
				margin="0px 0px 0px 0px"
			>
				Raft trip, Starting on Tue,{" "}
				<Span color="--green">
					20th of October
				</Span>
				{" "}
			</Text>
			<Box
				empty-min-height="64px"
				empty-border-color="LightGray"
				width="50%"
				empty-min-width="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				margin="40px 0px 0px 0px"
				lg-width="70%"
				md-width="100%"
			>
				<Text margin="0px 0px 16px 0px" color="--light" font="--base" text-align="left">
					Please plan to arrive at Page, Arizona the day prior to your trip departure. As such, you will require accommodations in Page, AZ. If desired, Wilderness River Adventures will arrange your stay at Lake Powell Resorts and Marinas for an additional cost. Resort confirmations will be sent along with your trip instructions. You will be charged for your stay at the time of booking.
				</Text>
				<Box display="grid" grid-template-columns="1fr 1fr" grid-gap="0px 40px">
					<Box>
						<Image
							src="https://images.unsplash.com/photo-1515666514476-37e89b90f443?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=540&q=80"
							max-height="120px"
							width="100%"
							object-fit="cover"
							lg-height="120px"
							srcSet="https://images.unsplash.com/photo-1515666514476-37e89b90f443?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1515666514476-37e89b90f443?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1515666514476-37e89b90f443?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1515666514476-37e89b90f443?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1515666514476-37e89b90f443?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1515666514476-37e89b90f443?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1515666514476-37e89b90f443?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
						<Text color="--green" lg-font="normal 600 20px/1.5 &quot;Varta&quot;, sans-serif" margin="8px 0px 0px 0px" font="--lead">
							Lake rowell resort
						</Text>
					</Box>
					<Box>
						<Image
							lg-height="120px"
							src="https://images.unsplash.com/photo-1618939552738-000685e6b199?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=542&q=80"
							max-height="120px"
							width="100%"
							object-fit="cover"
							srcSet="https://images.unsplash.com/photo-1618939552738-000685e6b199?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1618939552738-000685e6b199?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1618939552738-000685e6b199?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1618939552738-000685e6b199?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1618939552738-000685e6b199?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1618939552738-000685e6b199?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1618939552738-000685e6b199?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
						<Text margin="8px 0px 0px 0px" font="--lead" color="--green" lg-font="normal 600 20px/1.5 &quot;Varta&quot;, sans-serif">
							Know before you go
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="40px 0 60px 0" md-padding="20px 0 30px 0">
			<Override slot="SectionContent" position="relative" min-height="500px" lg-min-height="292px" />
			<Box
				width="100%"
				height="100%"
				position="absolute"
				background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1606410015832-28347e824cd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1324&q=80) 50% 50% /cover no-repeat scroll padding-box"
				z-index="-1"
				filter="grayscale(100%)"
			/>
			<Components.QuarklycommunityKitPopup
				height="100%"
				width="100%"
				align-items="center"
				display="flex"
				justify-content="center"
			>
				<Override
					slot="Button Open"
					hover-opacity=".8"
					transition="opacity 0.3s ease-in-out 0s"
					padding="0px 0px 0px 0px"
					height="70px"
					color="rgba(255, 255, 255, 0)"
					background="rgba(0, 119, 204, 0) url(https://uploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/ant-design_play-circle-filled.png?v=2021-10-13T16:00:02.176Z) center center/auto no-repeat"
					width="70px"
				/>
				<Override slot="Wrapper" width="80%" />
				<Override slot="Button Close" size="40px" />
				<Box>
					<Components.QuarklycommunityKitYouTube autoplay={false} url="https://www.youtube.com/watch?v=j2cBVlHgo1E" showOverlay={false} />
				</Box>
			</Components.QuarklycommunityKitPopup>
		</Section>
		<Section padding="60px 0 40px 0">
			<Box
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="50%"
			>
				<Text
					margin="0px 0px 40px 0px"
					color="--light"
					font="--headline2"
					lg-font="normal 500 32px/1.2 --fontFamily-googleAlegreyaSans, sans-serif"
					md-margin="0px 0px 16px 0px"
				>
					The Adventure Starts
				</Text>
				<Text
					color="--light"
					font="--base"
					lg-font="normal 400 16px/1.5 &quot;Varta&quot;, sans-serif"
					margin="0px 0px 0px 0px"
					text-align="left"
				>
					Every morning, you'll be greeted by the aroma of freshly brewed coffee and the sounds of rushing water mixed with the murmur of sleepy voices echoing through the canyon walls. Breakfast is hot and diverse waiting for you. After that, you will form a "bucket line" to assist in loading the gear back into the boats.{" "}
				</Text>
			</Box>
		</Section>
		<Section padding="40px 0 40px 0" md-padding="20px 0 12px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				empty-border-color="LightGray"
				padding="0px 20px 0px 0px"
				md-padding="0px 0px 0px 0px"
				md-width="100%"
				empty-min-width="64px"
				empty-border-style="solid"
				width="50%"
				empty-min-height="64px"
				empty-border-width="1px"
			>
				<Image
					object-fit="cover"
					lg-max-height="230px"
					src="https://images.unsplash.com/photo-1574116504481-e06341e984e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=974&q=80"
					max-height="400px"
					width="100%"
					srcSet="https://images.unsplash.com/photo-1574116504481-e06341e984e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1574116504481-e06341e984e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1574116504481-e06341e984e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1574116504481-e06341e984e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1574116504481-e06341e984e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1574116504481-e06341e984e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1574116504481-e06341e984e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Text
					sm-margin="24px 0px 16px 0px"
					margin="32px 0px 16px 0px"
					font="--lead"
					color="--green"
					lg-font="normal 600 20px/1.5 &quot;Varta&quot;, sans-serif"
					md-margin="12px 0px 16px 0px"
				>
					Lower Grand Canyon Rafting Trips
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					font="--base"
					color="--light"
					text-align="left"
					lg-font="normal 400 16px/1.5 &quot;Varta&quot;, sans-serif"
					md-margin="0px 0px 32px 0px"
				>
					You can have 5 and 7 day guided tours with Wilderness River Adventures. These Grand Canyon rafting adventures will take you 102 miles from Phantom Ranch to Bar 10 Ranch.
				</Text>
			</Box>
			<Box
				empty-border-width="1px"
				empty-border-style="solid"
				width="50%"
				md-width="100%"
				md-padding="0px 0px 0px 0px"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-color="LightGray"
				padding="0px 0px 0px 20px"
			>
				<Image
					src="https://images.unsplash.com/photo-1593107757644-25f0b23e9297?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=970&q=80"
					max-height="400px"
					width="100%"
					object-fit="cover"
					lg-max-height="230px"
					srcSet="https://images.unsplash.com/photo-1593107757644-25f0b23e9297?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1593107757644-25f0b23e9297?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1593107757644-25f0b23e9297?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1593107757644-25f0b23e9297?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1593107757644-25f0b23e9297?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1593107757644-25f0b23e9297?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1593107757644-25f0b23e9297?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3200&q=80 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Text
					margin="32px 0px 16px 0px"
					font="--lead"
					color="--green"
					lg-font="normal 600 20px/1.5 &quot;Varta&quot;, sans-serif"
					md-margin="12px 0px 16px 0px"
					sm-margin="24px 0px 16px 0px"
				>
					Grand Tradition Rafting Trips
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					font="--base"
					color="--light"
					lg-font="normal 400 16px/1.5 &quot;Varta&quot;, sans-serif"
					text-align="left"
				>
					You can take our Grand Canyon guided 6-, 9-, and 14-day trips. If you want more than just river rafting, this is the trip for you. Our 2-week Grand Canyon Tour covers 225 miles and 73 graded rapids that you will never forget.
This Colorado Rafting Trip for you if you're into rafting, with lots of white water rapids and long distances. So choose one of our five Colorado River rafting trips and enjoy this life-changing experience.
				</Text>
			</Box>
		</Section>
		<Section padding="40px 0 40px 0" md-padding="20px 0 12px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				padding="0px 20px 0px 0px"
				md-padding="0px 0px 0px 0px"
				md-width="100%"
				lg-width="40%"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-min-width="64px"
				empty-border-color="LightGray"
				width="30%"
			>
				<Image
					src="https://images.unsplash.com/photo-1616605586215-199845790f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
					max-height="400px"
					width="100%"
					object-fit="cover"
					lg-max-height="230px"
					srcSet="https://images.unsplash.com/photo-1616605586215-199845790f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1616605586215-199845790f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1616605586215-199845790f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1616605586215-199845790f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1616605586215-199845790f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1616605586215-199845790f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1616605586215-199845790f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3200&q=80 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Text
					font="--lead"
					color="--green"
					lg-font="normal 600 20px/1.5 &quot;Varta&quot;, sans-serif"
					md-margin="12px 0px 16px 0px"
					sm-margin="24px 0px 16px 0px"
					margin="32px 0px 16px 0px"
				>
					Best of Rafting Trips
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					font="--base"
					color="--light"
					text-align="left"
					lg-font="normal 400 16px/1.5 &quot;Varta&quot;, sans-serif"
					md-margin="0px 0px 32px 0px"
				>
					If you’re hungry for Grand Canyon River rafting, with loads of white water rapids and lots of miles, this is the Colorado Rafting Trip for you. So relax and enjoy the grandeur of the Grand Canyon on one of our five Best of Grand Canyon Colorado River rafting trips.
				</Text>
			</Box>
			<Box
				empty-border-color="LightGray"
				padding="0px 0px 0px 20px"
				md-width="100%"
				lg-width="60%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-style="solid"
				empty-border-width="1px"
				width="70%"
				md-padding="0px 0px 0px 0px"
			>
				<Image
					src="https://images.unsplash.com/photo-1512675628397-28288d1220ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1044&q=80"
					max-height="400px"
					width="100%"
					object-fit="cover"
					lg-max-height="230px"
					srcSet="https://images.unsplash.com/photo-1512675628397-28288d1220ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1512675628397-28288d1220ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1512675628397-28288d1220ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1512675628397-28288d1220ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1512675628397-28288d1220ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1512675628397-28288d1220ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1512675628397-28288d1220ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3200&q=80 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Box sm-padding="0px 0px 0px 0px" md-padding="0px 0px 0px 0px" padding="0px 30% 0px 0px">
					<Text
						md-margin="12px 0px 16px 0px"
						sm-margin="24px 0px 16px 0px"
						margin="32px 0px 16px 0px"
						font="--lead"
						color="--green"
						lg-font="normal 600 20px/1.5 &quot;Varta&quot;, sans-serif"
					>
						Upper Grand Canyon Rafting Trips
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						font="--base"
						color="--light"
						lg-font="normal 400 16px/1.5 &quot;Varta&quot;, sans-serif"
						text-align="left"
					>
						Let Wilderness River Adventures show you the Colorado River like you’ve never seen it before on this thrilling 3 ½-day or 5 ½-day trips. On these Grand Canyon rafting expeditions, your journey will take you 86 miles from Lee's Ferry to Phantom Ranch (deep within the Grand Canyon).
					</Text>
				</Box>
			</Box>
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
					src="https://uploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/logo.png?v=2021-10-13T10:30:43.604Z"
					width="192px"
					height="auto"
					lg-max-width="150px"
					srcSet="https://smartuploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/logo.png?v=2021-10-13T10%3A30%3A43.604Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/logo.png?v=2021-10-13T10%3A30%3A43.604Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/logo.png?v=2021-10-13T10%3A30%3A43.604Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/logo.png?v=2021-10-13T10%3A30%3A43.604Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/logo.png?v=2021-10-13T10%3A30%3A43.604Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/logo.png?v=2021-10-13T10%3A30%3A43.604Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/logo.png?v=2021-10-13T10%3A30%3A43.604Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Box margin="28px 0px 52px 0px" display="flex" lg-margin="24px 0px 16px 0px">
					<Link
						transition="color 0.3s --transitionTimingFunction-easeInOut 0s"
						border-style="solid"
						border-color="rgba(255, 255, 255, 0)"
						href="#"
						text-decoration-line="initial"
						margin="0px 32px 0px 0px"
						hover-color="--green"
						lg-margin="0px 16px 0px 0px"
						color="--light"
						font="--base"
						padding="6px 0px 6px 0px"
						hover-border-color="--color-green"
						border-width="1px 0px 0px 0px"
						lg-font="normal 400 16px/1.5 &quot;Varta&quot;, sans-serif"
					>
						Discover
					</Link>
					<Link
						hover-border-color="--color-green"
						border-style="solid"
						href="#"
						font="--base"
						padding="6px 0px 6px 0px"
						transition="color 0.3s --transitionTimingFunction-easeInOut 0s"
						border-width="1px 0px 0px 0px"
						lg-font="normal 400 16px/1.5 &quot;Varta&quot;, sans-serif"
						hover-color="--green"
						border-color="rgba(255, 255, 255, 0)"
						lg-margin="0px 16px 0px 0px"
						text-decoration-line="initial"
						color="--light"
						margin="0px 32px 0px 0px"
					>
						Payment
					</Link>
					<Link
						hover-color="--green"
						transition="color 0.3s --transitionTimingFunction-easeInOut 0s"
						padding="6px 0px 6px 0px"
						hover-border-color="--color-green"
						border-color="rgba(255, 255, 255, 0)"
						margin="0px 32px 0px 0px"
						border-style="solid"
						lg-margin="0px 16px 0px 0px"
						href="#"
						text-decoration-line="initial"
						color="--light"
						font="--base"
						border-width="1px 0px 0px 0px"
						lg-font="normal 400 16px/1.5 &quot;Varta&quot;, sans-serif"
					>
						Services
					</Link>
					<Link
						font="--base"
						border-width="1px 0px 0px 0px"
						border-color="rgba(255, 255, 255, 0)"
						transition="color 0.3s --transitionTimingFunction-easeInOut 0s"
						hover-border-color="--color-green"
						href="#"
						text-decoration-line="initial"
						color="--light"
						hover-color="--green"
						padding="6px 0px 6px 0px"
						margin="0px 32px 0px 0px"
						border-style="solid"
						lg-font="normal 400 16px/1.5 &quot;Varta&quot;, sans-serif"
						lg-margin="0px 16px 0px 0px"
					>
						Insurance
					</Link>
				</Box>
				<Box margin="28px 0px 0px 0px" display="flex" md-margin="28px 0px 0px 0px">
					<Link
						color="--grey"
						font="--base"
						href="#"
						padding="6px 0px 6px 0px"
						margin="0px 32px 0px 0px"
						border-style="solid"
						hover-color="--green"
						transition="color 0.3s --transitionTimingFunction-easeInOut 0s"
						hover-border-color="--color-green"
						border-color="rgba(255, 255, 255, 0)"
						text-decoration-line="initial"
						border-width="1px 0px 0px 0px"
						lg-font="normal 400 16px/1.5 &quot;Varta&quot;, sans-serif"
						lg-margin="0px 16px 0px 0px"
					>
						Customer service 24/7
					</Link>
					<Link
						color="--grey"
						padding="6px 0px 6px 0px"
						hover-color="--green"
						transition="color 0.3s --transitionTimingFunction-easeInOut 0s"
						border-width="1px 0px 0px 0px"
						border-color="rgba(255, 255, 255, 0)"
						href="#"
						text-decoration-line="initial"
						font="--base"
						margin="0px 32px 0px 0px"
						hover-border-color="--color-green"
						border-style="solid"
						lg-font="normal 400 16px/1.5 &quot;Varta&quot;, sans-serif"
					>
						Contact
					</Link>
				</Box>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="40%"
				md-width="100%"
				md-margin="24px 0px 0px 0px"
				empty-min-width="64px"
			>
				<Text
					md-text-align="left"
					margin="0px 0px 26px 0px"
					color="--light"
					font="--headline4"
					text-align="right"
					lg-font="700 22px/1.2 --fontFamily-googleAlegreyaSans, sans-serif"
				>
					Let’s stay in touch
				</Text>
				<Components.QuarklycommunityKitNetlifyForm display="flex" align-items="center" justify-content="flex-end" md-justify-content="flex-start">
					<Override slot="Form" display="flex" align-items="center" justify-content="center" />
					<Input
						name="Phone"
						placeholder="Give us your phone..."
						type="tel"
						required
						border-width="1px"
						color="--grey"
						border-radius="0px"
						background="rgba(255, 255, 255, 0)"
						border-color="--color-green"
						padding="12px 16px 10px 16px"
					/>
					<Button
						border-radius="0px"
						hover-opacity=".8"
						transition="opacity 0.3s --transitionTimingFunction-easeInOut 0s"
						position="relative"
						top="-1px"
						background="--color-green url(https://uploads.quarkly.io/6166a2b829a0a1001e6ca5fd/images/arrow_right_alt.png?v=2021-10-14T12:16:06.886Z) center center/auto no-repeat"
						width="56px"
						height="51px"
						color="rgba(255, 255, 255, 0)"
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