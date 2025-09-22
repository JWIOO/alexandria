import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#121511] text-white">
      {/* Header Section */}
      <div className="relative">
        {/* Hero Background */}
        <div
          className="relative w-full h-[493px] bg-cover bg-center"
          style={{
            backgroundImage: "url('https://c.animaapp.com/aIMdOiel/img/image.png')"
          }}
        >
          {/* Breadcrumb Content */}
          <div className="absolute top-[240px] left-1/2 transform -translate-x-1/2 text-center">
            <h1 className="text-white text-6xl font-bold mb-4 leading-[70px]">알렉산드리아 도서관</h1>
            <div className="flex items-center justify-center gap-2 text-white font-bold">
              <span>HOME</span>
              <Image
                src="https://c.animaapp.com/aIMdOiel/img/group-131422@2x.png"
                alt="arrow"
                width={15}
                height={1}
              />
              <span>OUR TEAM - DETAIL</span>
            </div>
          </div>
        </div>

        {/* Navigation Header */}
        <div className="absolute top-0 w-full h-[90px] bg-[#1c1f18]/60 backdrop-blur-md border-b border-white/15">
          <div className="flex items-center justify-between px-6 h-full">
            <Image
              src="https://c.animaapp.com/aIMdOiel/img/logo.svg"
              alt="logo"
              width={45}
              height={30}
            />

            {/* Navigation Menu */}
            <nav className="hidden md:flex items-center gap-16">
              <a href="#" className="text-white hover:text-green-400 transition-colors">HOME</a>
              <a href="#" className="text-white hover:text-green-400 transition-colors">ABOUT</a>
              <a href="#" className="text-white hover:text-green-400 transition-colors">SERVICES</a>
              <a href="#" className="text-white hover:text-green-400 transition-colors">BLOG</a>
              <a href="#" className="text-white hover:text-green-400 transition-colors">SHOP</a>
            </nav>

            <Image
              src="https://c.animaapp.com/aIMdOiel/img/menu@2x.png"
              alt="menu"
              width={28}
              height={25}
            />
          </div>
        </div>
      </div>

        {/* Search Bar Section */}
        <div className="px-4 py-12">
            <div className="max-w-[1450px] mx-auto space-y-4">
                {/* 버튼 그룹 */}
                <div className="flex gap-2">
                    {/* 필수형 드롭다운 */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="px-6 py-3 bg-stone-900 border-b border-neutral-700 inline-flex justify-between items-center gap-4 cursor-pointer w-40">
                                <div className="text-white text-base font-normal font-sora">필수형</div>
                                <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-[#A3FF32]"></div>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-40 bg-stone-900 border-neutral-700 shadow-lg p-0">
                            <DropdownMenuItem className="px-6 py-3 bg-stone-900 border-b border-neutral-700 flex justify-start items-center hover:bg-stone-800 cursor-pointer">
                                <div className="text-white text-base font-normal font-sora">PXO-103</div>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="px-6 py-3 bg-stone-900 border-b border-neutral-700 flex justify-start items-center hover:bg-stone-800 cursor-pointer">
                                <div className="text-white text-base font-normal font-sora">PXO116-2018</div>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="px-6 py-3 bg-stone-900 border-b border-neutral-700 flex justify-start items-center hover:bg-stone-800 cursor-pointer">
                                <div className="text-white text-base font-normal font-sora">기타</div>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* 해시태그 드롭다운 */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="px-6 py-3 bg-stone-900 border-b border-neutral-700 inline-flex justify-between items-center gap-4 cursor-pointer w-40">
                                <div className="text-white text-base font-normal font-sora">해시태그</div>
                                <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-[#A3FF32]"></div>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-40 bg-stone-900 border-neutral-700 shadow-lg p-0">
                            <DropdownMenuItem className="px-6 py-3 bg-stone-900 border-b border-neutral-700 flex justify-start items-center hover:bg-stone-800 cursor-pointer">
                                <div className="text-white text-base font-normal font-sora">#디자인</div>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="px-6 py-3 bg-stone-900 border-b border-neutral-700 flex justify-start items-center hover:bg-stone-800 cursor-pointer">
                                <div className="text-white text-base font-normal font-sora">#실무</div>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="px-6 py-3 bg-stone-900 border-b border-neutral-700 flex justify-start items-center hover:bg-stone-800 cursor-pointer">
                                <div className="text-white text-base font-normal font-sora">#자료조사</div>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="px-6 py-3 bg-stone-900 border-b border-neutral-700 flex justify-start items-center hover:bg-stone-800 cursor-pointer">
                                <div className="text-white text-base font-normal font-sora">#기획</div>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="px-6 py-3 bg-stone-900 border-b border-neutral-700 flex justify-start items-center hover:bg-stone-800 cursor-pointer">
                                <div className="text-white text-base font-normal font-sora">#Tool</div>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="px-6 py-3 bg-stone-900 border-b border-neutral-700 flex justify-start items-center hover:bg-stone-800 cursor-pointer">
                                <div className="text-white text-base font-normal font-sora">#기초</div>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>


                <div
                    className="px-6 py-3 bg-stone-900 border-b border-neutral-700 flex items-center w-full">
                    <input
                        type="text"
                        placeholder="검색어를 입력하세요"
                        className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-400 font-sora"
                    />
                    <Image
                        src="https://c.animaapp.com/aIMdOiel/img/layer-1.svg"
                        alt="search"
                        width={18}
                        height={18}
                        className="ml-3"
                    />
                </div>
            </div>
        </div>


        {/* Main Content Cards */}
        <div className="max-w-[1450px] mx-auto px-4 pb-20">
        <div className="space-y-48">
          {/* First Card */}
          <TeamDetailCard />

          {/* Second Card */}
          <TeamDetailCard />

            {/* Third Card */}
            <TeamDetailCard />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
function TeamDetailCard() {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-[2fr_1.2fr] gap-16">
            {/* 메인 콘텐츠 */}
            <div className="flex flex-col gap-8">
                {/* 이미지 + 텍스트 2컬럼 */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* 이미지 */}
                    <div
                        className="relative w-full h-[498px] lg:w-[420px] overflow-hidden bg-cover bg-center flex-shrink-0"
                        style={{
                            backgroundImage:
                                "url('https://c.animaapp.com/aIMdOiel/img/image-3@2x.png')",
                        }}
                    >
                        <div className="absolute top-5 left-5 flex gap-2">
                            <div
                                className="h-6 px-1.5 bg-stone-900/60 backdrop-blur-[6px] inline-flex justify-start items-center gap-2.5">
                                <div
                                    className="justify-start text-[#A3FF32] text-sm font-semibold font-sora uppercase leading-normal">필수형
                                </div>
                            </div>
                            <div
                                className="h-6 px-1.5 bg-stone-900/60 backdrop-blur-[6px] inline-flex justify-start items-center gap-2.5">
                                <div
                                    className="justify-start text-white text-sm font-semibold font-sora uppercase leading-normal">PXO
                                    - 103
                                </div>
                            </div>
                            <div
                                className="h-6 px-1.5 bg-stone-900/60 backdrop-blur-[6px] inline-flex justify-start items-center gap-2.5">
                                <div
                                    className="justify-start text-white text-sm font-semibold font-sora uppercase leading-normal">PXO116
                                    - 2018
                                </div>
                            </div>
                            {/*<Badge className="bg-[#1c1e18]/60 text-[#a2ff32] backdrop-blur-md">*/}
                            {/*    필수형*/}
                            {/*</Badge>*/}
                            {/*<Badge className="bg-[#1c1e18]/60 text-white backdrop-blur-md">*/}
                            {/*    PXO-103*/}
                            {/*</Badge>*/}

                            {/*<Badge className="bg-[#1c1e18]/60 text-white backdrop-blur-md">*/}
                            {/*    PXO116-2018*/}
                            {/*</Badge>*/}
                        </div>
                    </div>

                    {/* 텍스트 */}
                    <div className="flex-grow flex flex-col gap-6">
                        <div className="flex items-center gap-2">
                            <span className="text-[#a2ff32] font-semibold">UNIT</span>
                            <Image
                                src="https://c.animaapp.com/aIMdOiel/img/group-131422-3@2x.png"
                                alt="unit arrow"
                                width={44}
                                height={7}
                            />
                        </div>

                        {/*<h2 className="text-white text-5xl font-bold leading-tight">*/}
                        {/*    [기획 TOOL] 가시화 잘 보이지 않는 기획은, 휴지통으로 간다.*/}
                        {/*</h2>*/}
                        <div
                            className="w-[505px] justify-start text-white text-5xl font-bold font-chakra-korean uppercase leading-tight">[기획
                            Tool] 가시화 : 잘 보이지 않는 기획은, 휴지통으로 간다.
                        </div>

                        <div className="space-y-6">
                            {/* 설명 */}
                            <div className="grid grid-cols-[50px_1fr]  items-start">
                                <h3 className="text-white text-lg font-bold">설명</h3>
                                <p
                                    className="text-[#BABABA] font-sora text-base font-normal leading-[26px] tracking-[-0.8px]"
                                > 본 과정에서는 비즈니스 실무 기획 직무에 진입하는 모든 유망주들이,
                                    자신이 구상하고 기획하는 모든 내용들을 실무자가 어떤 원칙 등을 통해
                                    ‘실제 기획 자료’ (기획안, 기획제안서, 기획 보고소 등)로 제대로 ‘보여줄 수’
                                    있는지에 대해 초점을 맞추고 있습니다.
                                </p>
                            </div>

                            {/* 목표 */}
                            <div className="grid grid-cols-[50px_1fr]  items-start">
                                <h3 className="text-white text-lg font-bold">목표</h3>
                                <p
                                    className="text-[#BABABA] font-sora text-base font-normal leading-[26px] tracking-[-0.8px]"
                                > 본 유닛을 통해, 이후 팔랑크스 크루들의 기획안이 타 경쟁자들보다
                                    ‘높은 가시성’을 통해, 우리 크루들이 구상하고 표현하는 기획을
                                    효과적으로 전달할 수 있는 ‘퀄리티’ 높은 기획안이 되는 것을 목표로 합니다.
                                </p>
                            </div>
                        </div>


                        {/* 태그 */}
                        <div className="flex gap-2">
                            <Badge className="bg-[#1c1e18]/60 text-white backdrop-blur-md">
                                #디자인
                            </Badge>
                            <Badge className="bg-[#1c1e18]/60 text-white backdrop-blur-md">
                                #브랜딩
                            </Badge>
                            <Badge className="bg-[#1c1e18]/60 text-white backdrop-blur-md">
                                #발표
                            </Badge>
                        </div>
                    </div>
                </div>

                {/* 인용구 */}
                <div
                    className="p-5 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://c.animaapp.com/aIMdOiel/img/about-me---1.png')",
                    }}
                >
                    <p className="text-white text-center text-[24px] leading-[34px] font-bold tracking-[-0.02em]" style={{ fontFamily: 'GapyeongHanseokbongBigBrush' }}>

                    “아들아, 중고차를 팔 때, 단 1시간을 들여 정성들여 닦고 간단한 흠집만이라도 제거한다면,
                        그 간단한 ‘정성’만으로도 몇 백불은 더 받을 수 있단다.” <br />- 미국 애리조나 주 카운티 maxim -
                    </p>
                </div>

                {/* 진행횟수/평점 */}
                <div className="space-y-2">
                    <div className="flex items-center gap-4">
                        <div
                            className="justify-start text-white text-3xl font-bold font-chakra-korean uppercase leading-10">진행
                            횟수
                        </div>
                        <div
                            className="justify-start text-[#A3FF32] text-3xl font-bold font-chakra-petch uppercase leading-10">76회
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="justify-start text-white text-3xl font-bold font-chakra-korean  uppercase leading-10">평점</div>
                        <div
                            className="justify-start text-[#A3FF32] text-3xl font-bold font-chakra-petch  uppercase leading-10">9.5
                        </div>

                        <div className="justify-start text-neutral-600 text-2xl font-bold font-chakra-korean uppercase leading-10">/ 10</div>
                        <Image
                            src="https://c.animaapp.com/aIMdOiel/img/star-3@2x.png"
                            alt="stars"
                            width={205}
                            height={16}
                        />
                    </div>
                </div>
            </div>

            {/* 사이드바 */}
            <div className="space-y-5">
                {/* Steps Card */}
                <Card className="bg-[#111410] border border-white/15 rounded-none w-full ">
                    <CardContent className="pt-4 space-y-3">
                        {/* 제목 */}
                        <div
                            className="justify-start text-white text-3xl font-bold font-chakra-korean uppercase leading-10">
                            구성 스텝
                        </div>


                        {/* 스텝 리스트 */}
                        <div className="space-y-6">
                            <div className="flex gap-3">
                        <span className="text-white text-xl font-bold font-chakra-korean">
                          1)
                        </span>
                                <p
                                    className="justify-start text-neutral-400 text-base font-normal font-sora leading-relaxed">[도식화]
                                    잘 보이는 기획은 도형을 가진다 (상하/좌우 배치, 방향, 기호, 색깔 등
                                </p>
                            </div>

                            <div className="flex gap-3">
                            <span className="text-white text-xl font-bold font-chakra-korean">
                              2)
                            </span>
                                                    <p
                                    className="justify-start text-neutral-400 text-base font-normal font-sora leading-relaxed">[그래프]
                                    잘 보이는 기획은 그래프를 가진다. (원, 연속, 선, 막대, 지표, 비교 등)
                                </p>
                            </div>

                                                <div className="flex gap-3">
                            <span className="text-white text-xl font-bold font-chakra-korean">
                              3)
                            </span>
                                <p
                                    className="justify-start text-neutral-400 text-base font-normal font-sora leading-relaxed">[강조화]
                                    잘 보이는 기획은 포인트를 가진다. (배경 box, 밑줄, 빨간색, 볼드, 크기, 표시 등)
                                </p>
                            </div>
                        </div>

                        {/* 구분선 */}
                        <hr className="border-t border-white/20"/>

                        {/* 우수 사례 */}

                        {/*<div className="relative inline-flex justify-start items-center gap-2.5">*/}
                        {/*    <div*/}
                        {/*        className="w-80 justify-start text-zinc-400 text-base font-normal font-['Sora'] leading-relaxed"> GT*/}
                        {/*        만나고 내 기획 인생 180도 달라진 썰 푼다. (GD 아님)*/}
                        {/*    </div>*/}
                        {/*    <img className="w-4 h-4 left-[4px] top-[5px] absolute" src="https://placehold.co/16x16"/>*/}
                        {/*</div>*/}

                        <div className="space-y-2">
                            <h4 className="text-white text-xl font-bold font-chakra-korean leading-loose">
                                우수 사례
                            </h4>
                            <div className="inline-flex items-center gap-2 cursor-pointer group">
                                <Image
                                    src="https://c.animaapp.com/aIMdOiel/img/107003-4-1@2x.png"
                                    alt="link icon"
                                    width={16}
                                    height={16}
                                />
                                <div className="text-zinc-400 text-base font-normal font-sora leading-relaxed group-hover:text-white group-hover:underline transition-all">
                                    GT 만나고 내 기획 인생 180도 달라진 썰 푼다. (GD 아님)
                                </div>
                            </div>
                        </div>


                    </CardContent>
                </Card>


                {/* Review Card */}
                <Card className="bg-[#111410] border-white/15 rounded-none">
                    <CardContent className="pt-1  ">
                        {/* 상단 프로필 */}
                        <div className="flex items-start justify-between mb-6">
                        <div className="flex flex-col items-start">
                                <Image
                                    src="https://c.animaapp.com/aIMdOiel/img/image-4@2x.png"
                                    alt="reviewer"
                                    width={120}
                                    height={120}
                                />
                                <h4 className="mt-4 text-white text-xl font-semibold">이혜인</h4>
                            <div className="flex items-center gap-2">

                                <p className="text-gray-400 text-sm">7기 브랜드팀
                                </p>
                                <Image
                                    src="/grey-arrow.png"
                                    alt="unit arrow"
                                    width={44}
                                    height={7}
                                />
                            </div>


                            </div>
                            <Image
                                src="https://c.animaapp.com/aIMdOiel/img/--1.svg"
                                alt="quote"
                                width={77}
                                height={60}
                            />
                        </div>

                        <hr className="border-gray-600 mb-4" />

                        {/* 별점 */}
                        <Image
                            src="https://c.animaapp.com/aIMdOiel/img/star-3@2x.png"
                            alt="stars"
                            width={205}
                            height={16}
                            className="mb-5"
                        />

                        {/* 리뷰 텍스트 */}
                        <div
                            className="justify-start text-white text-xl font-semibold uppercase leading-normal"
                            style={{ fontFamily: 'Pretendard' }}
                        >해당
                            내용 기획자 초보라면 특히나 꼭 읽어봐야 할 내용입니다 ~! 기초 다지기를 할때 매우 좋으니 꼭 읽고 똑똑하게 기획 하시기 바랍니다 :)
                        </div>
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}

function Footer() {
    return (
        <footer className="relative bg-transparent border-t border-white/15">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Description */}
          <div className="md:col-span-1">
            <Image
              src="https://c.animaapp.com/aIMdOiel/img/logo-1@2x.png"
              alt="logo"
              width={179}
              height={104}
              className="mb-4"
            />
            <p className="text-gray-400 mb-6">
              Sed libero odio, sollicitudin a porttitor ac, tempor eu nisi. Nulla sit amet suscipit dolormentum mauris in, rutrum augue.
            </p>

            {/* App Store Buttons */}
            <div className="flex gap-4">
              <div className="relative">
                <Image
                  src="https://c.animaapp.com/aIMdOiel/img/rectangle-176.svg"
                  alt="app store"
                  width={204}
                  height={69}
                />

                <span className="absolute top-2 left-16 text-zinc-400 font-sora  text-sm">Get it on</span>
                <Image
                  src="https://c.animaapp.com/aIMdOiel/img/group-131463@2x.png"
                  alt="app store text"
                  width={105}
                  height={21}
                  className="absolute bottom-4 left-16"
                />
                <Image
                  src="https://c.animaapp.com/aIMdOiel/img/group-131462@2x.png"
                  alt="apple"
                  width={35}
                  height={39}
                  className="absolute top-4 left-6"
                />
              </div>

                <div className="relative">
                    <Image
                        src="https://c.animaapp.com/aIMdOiel/img/rectangle-176-1.svg"
                        alt="google play"
                        width={184}
                        height={69}
                    />
                    <span className="absolute top-2 left-16 text-zinc-400 font-sora  text-sm">Get it on</span>
                    <Image
                        src="https://c.animaapp.com/aIMdOiel/img/group-131465@2x.png"
                        alt="google play text"
                        width={98}
                        height={21}
                        className="absolute bottom-4 left-14"
                    />
                    <Image
                        src="https://c.animaapp.com/aIMdOiel/img/group-131466@2x.png"
                        alt="google play"
                        width={33}
                        height={40}
                        className="absolute top-3 left-5"
                    />
                </div>
            </div>
          </div>

            {/* Useful Links */}
            <div>
                <h3 className="text-white text-lg font-semibold mb-6">USEFUL LINKS</h3>
            <div className="text-gray-400 space-y-2">
              <div>Home</div>
              <div>About Us</div>
              <div>Appointment</div>
              <div>Services</div>
              <div>Blog</div>
            </div>
          </div>

          {/* Utility Pages */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">UTILITY PAGES</h3>
            <div className="text-gray-400 space-y-2">
              <div>FAQ/Return</div>
              <div>Privacy/Terms</div>
              <div>Gift Cards</div>
              <div>Sizing Guide</div>
              <div>Accessibility</div>
            </div>
          </div>

          {/* Miscellaneous */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">MISCELLANEOUS</h3>
            <div className="text-gray-400 space-y-2">
              <div>Community</div>
              <div>FAQs</div>
              <div>License</div>
              <div>Privacy</div>
              <div>Contact Us</div>
            </div>
          </div>
        </div>


      </div>
    </footer>
  );
}
