import { createFileRoute, Link } from "@tanstack/react-router";
import { packages } from "@/lib/lg-data";
import { TicketPattern } from "@/components/lg/TicketPattern";
import heroImg from "@/assets/hero-sunlight.jpg.asset.json";
import discoverImg from "@/assets/discover-aerial.jpg.asset.json";
import journeyImg from "@/assets/journey-aerial.jpg.asset.json";
import tunnelImg from "@/assets/boat-tunnel.jpg.asset.json";
import peopleImg from "@/assets/people-boats.jpg.asset.json";
import wisdomImg from "@/assets/fisherman-net.jpg.asset.json";
import birdsImg from "@/assets/seasonal-birds.jpg.asset.json";
import communityImg from "@/assets/community-kids.jpg.asset.json";
import galleryImg from "@/assets/gallery-boats.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Land of Grace — Bangpu Mangrove, Pattani" },
      {
        name: "description",
        content:
          "ล่องเรือชมป่าโกงกางบางปู ปัตตานี สามประสบการณ์ตามฤดูกาล ตั๋วดิจิทัลลายเฉพาะ และแผนที่ติดตามเรือแบบสด",
      },
      { property: "og:title", content: "Land of Grace — Bangpu Mangrove, Pattani" },
      {
        property: "og:description",
        content: "ป่าโกงกางบางปู ปัตตานี สามประสบการณ์ล่องเรือ ตั๋วลายเฉพาะ และแผนที่ติดตามเรือแบบสด",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Asset = { url: string };

function Eyebrow({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-display text-sm tracking-[0.3em] text-accent">{n}</span>
      <span className="h-px w-10 bg-white/25" />
      <span className="text-[0.6rem] tracking-[0.35em] text-muted-foreground uppercase">
        {label}
      </span>
    </div>
  );
}

function Photo({
  asset,
  alt,
  className = "",
  eager = false,
}: {
  asset: Asset;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <img
      src={asset.url}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      className={"h-full w-full object-cover " + className}
    />
  );
}

const seasons = [
  { id: "year", tag: "Daytime", mood: "แสงกลางวัน · ป่าเขียว" },
  { id: "firefly", tag: "Nighttime", mood: "หิ่งห้อย · ตลาดกลางคืน" },
  { id: "migration", tag: "Migration", mood: "พื้นที่ชุ่มน้ำ · ฟ้าอ่อน" },
] as const;

function Index() {
  return (
    <div className="pb-4">
      {/* 01 · Hero */}
      <section className="relative -mt-24 flex min-h-[100svh] items-end overflow-hidden sm:-mt-28">
        <Photo asset={heroImg} eager alt="แสงอาทิตย์ส่องผ่านเรือนยอดป่าโกงกางบางปู ปัตตานี" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.14 0.02 160 / 0.5) 0%, oklch(0.14 0.02 160 / 0.12) 42%, oklch(0.13 0.02 160 / 0.88) 100%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-6xl px-4 pt-32 pb-10 sm:px-5 sm:pb-16">
          <div className="rise max-w-3xl">
            <div className="glass-strong inline-flex px-5 py-2.5">
              <Eyebrow n="01" label="Land of Grace" />
            </div>
            <h1 className="font-display mt-7 text-6xl leading-[0.92] font-light tracking-tight sm:text-8xl">
              BANGPU
              <span className="mt-4 block text-lg tracking-[0.35em] text-accent uppercase sm:text-xl">
                Mangrove, Pattani
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              ผืนป่าโกงกางแห่งสุดท้ายริมอ่าวปัตตานี — สำรวจด้วยเรือพื้นบ้านกับชุมชน
              ผ่านวิถีมลายู แสงหิ่งห้อย และฤดูกาลของธรรมชาติที่เปลี่ยนไปตลอดทั้งปี
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                to="/booking"
                className="rounded-full px-7 py-3 text-xs tracking-[0.2em] uppercase transition-transform duration-300 hover:-translate-y-0.5"
                style={{ background: "var(--gold)", color: "var(--gold-foreground)" }}
              >
                Explore Experiences →
              </Link>
              <Link
                to="/live"
                className="rounded-full border border-white/25 bg-white/5 px-7 py-3 text-xs tracking-[0.2em] uppercase backdrop-blur transition-colors hover:bg-white/15"
              >
                Live Map
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 02 · Discover Bangpu */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-5 sm:py-32">
        <Eyebrow n="02" label="Discover Bangpu" />
        <div className="mt-8 grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl leading-[1.05] font-light sm:text-6xl">
              เมื่อป่าโกงกาง
              <span className="block text-accent">กลายเป็นมหาสมุทรเขียว</span>
            </h2>
            <p className="mt-7 max-w-xl text-sm leading-loose text-muted-foreground sm:text-base">
              จากมุมสูง ป่าบางปูคือทะเลของเรือนยอดที่แทรกลำน้ำสีหยก
              จากพื้นราบ มันคือบ้านของปู ปลา นกอพยพ และครอบครัวชาวประมงริมอ่าวปัตตานี
              เราพาคุณล่องผ่านทั้งสองโลกนี้อย่างช้า ๆ แบบที่คนที่นี่ทำมาหลายชั่วอายุคน
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[3/4]">
              <Photo asset={discoverImg} alt="ภาพมุมสูงผืนป่าโกงกางบางปูและลำคลองคดเคี้ยว" />
            </div>
            <p className="mt-4 text-right text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Bangpu wetlands · aerial
            </p>
          </div>
        </div>
      </section>

      {/* 03 · The Journey */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-5 sm:pb-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4 lg:order-2 lg:pl-6">
            <Eyebrow n="03" label="The Journey" />
            <h2 className="font-display mt-6 text-4xl leading-tight font-light sm:text-5xl">
              ล่องลึกเข้าไป
              <span className="block">ในอุโมงค์โกงกาง</span>
            </h2>
            <p className="mt-6 text-sm leading-loose text-muted-foreground">
              เส้นทางของเราไล่จากท่าเรือชุมชนบานา ลัดเลาะลำคลองที่แคบลงทีละโค้ง
              จนเรือนยอดปิดเป็นหลังคาธรรมชาติ แล้วเปิดออกสู่แนวป่าริมอ่าวอีกครั้ง
              ทุกเส้นทางนำโดยคนเรือท้องถิ่นที่รู้จักน้ำทุกฤดู
            </p>
            <Link
              to="/booking"
              className="mt-8 inline-block text-xs tracking-[0.25em] text-accent uppercase underline-offset-8 hover:underline"
            >
              ดูรอบและจอง →
            </Link>
          </div>
          <div className="lg:col-span-8 lg:order-1">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem]">
              <Photo asset={journeyImg} alt="ลำคลองสีหยกคดเคี้ยวผ่านเรือนยอดป่าโกงกาง" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              <div className="glass absolute bottom-5 left-5 max-w-xs p-5">
                <p className="text-xs tracking-[0.25em] text-accent uppercase">Route</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  ท่าเรือบานา → อุโมงค์โกงกาง → แนวอ่าวปัตตานี
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 · Experience The Mangrove */}
      <section className="relative overflow-hidden">
        <div className="relative h-[70vh] min-h-[480px] sm:h-[85vh]">
          <Photo asset={tunnelImg} alt="เรือล่องผ่านอุโมงค์ต้นโกงกาง" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-black/70" />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="text-center">
              <Eyebrow n="04" label="Experience The Mangrove" />
              <h2 className="font-display mt-5 text-4xl font-light text-white sm:text-6xl">
                สามฤดู · สามการเดินทาง
              </h2>
            </div>
          </div>
        </div>
        <div className="mx-auto -mt-14 max-w-6xl px-4 pb-24 sm:px-5 sm:pb-32">
          <div className="glass divide-y divide-white/10 overflow-hidden">
            {packages.map((p, i) => {
              const s = seasons.find((x) => x.id === p.id)!;
              return (
                <Link
                  key={p.id}
                  to="/booking"
                  search={{ pkg: p.id }}
                  className="group flex flex-col gap-2 px-6 py-7 transition-colors hover:bg-white/5 sm:flex-row sm:items-center sm:gap-8 sm:px-10"
                >
                  <span className="font-display w-10 text-2xl font-light text-accent">
                    0{i + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-medium sm:text-3xl">{p.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
                  </div>
                  <div className="sm:text-right">
                    <p className="text-xs tracking-[0.25em] text-accent uppercase">{s.tag}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{p.season} · {p.duration}</p>
                  </div>
                  <span className="hidden text-lg text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 sm:block">
                    →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 05 · People Of Bangpu */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-5 sm:pb-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
              <Photo asset={peopleImg} alt="ชาวประมงและผู้ประกอบการเรือชุมชนบางปู" />
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <Eyebrow n="05" label="People of Bangpu" />
            <h2 className="font-display mt-6 text-4xl leading-tight font-light sm:text-5xl">
              เรือทุกลำ
              <span className="block">มีเจ้าของที่รู้จัก</span>
            </h2>
            <p className="mt-6 text-sm leading-loose text-muted-foreground">
              คนเรือ คนเล่าเรื่อง และครัวชุมชน — รายได้จากทุกการล่องเรือกลับสู่ครัวเรือนริมอ่าวปัตตานี
              เมื่อคุณขึ้นเรือ คุณไม่ได้ซื้อทัวร์ คุณได้รับเชิญให้เป็นแขกของชุมชน
            </p>
            <Link
              to="/heritage"
              className="mt-8 inline-block text-xs tracking-[0.25em] text-accent uppercase underline-offset-8 hover:underline"
            >
              รู้จักชุมชนของเรา →
            </Link>
          </div>
        </div>
      </section>

      {/* 06 · Local Wisdom — dark full-bleed */}
      <section className="relative overflow-hidden">
        <div className="relative h-[80vh] min-h-[540px]">
          <Photo asset={wisdomImg} alt="ชายหนุ่มเหวี่ยงแหจับปูในป่าโกงกางยามเย็น" className="brightness-[0.72]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/75" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-5">
              <div className="max-w-xl">
                <Eyebrow n="06" label="Local Wisdom" />
                <h2 className="font-display mt-6 text-4xl leading-[1.08] font-light text-white sm:text-6xl">
                  ความรู้ที่ไม่มีในตำรา
                  <span className="block text-accent">มีอยู่ในมือคนเลี้ยงป่า</span>
                </h2>
                <p className="mt-6 max-w-lg text-sm leading-loose text-white/70 sm:text-base">
                  การเหวี่ยงแห การอ่านน้ำ การเลี้ยงป่าโดยไม่ต้องปลูกเอง —
                  ภูมิปัญญาเหล่านี้ถูกถ่ายทอดในทุกรอบเดินทาง ผ่านมือและเสียงเล่าของคนที่นี่
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 · Seasonal Stories */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-5 sm:py-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow n="07" label="Seasonal Stories" />
            <h2 className="font-display mt-6 text-4xl leading-tight font-light sm:text-5xl">
              ป่าเดียวกัน
              <span className="block text-accent">แต่เล่าเรื่องต่างกันทุกฤดู</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem]">
              <Photo asset={birdsImg} alt="ฝูงนกอพยพกินอาหารในพื้นที่ชุ่มน้ำบางปู" />
              <p className="glass absolute right-4 bottom-4 px-4 py-2 text-[0.65rem] tracking-[0.25em] text-foreground uppercase">
                Migration · Nov–Mar
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              id: "year",
              k: "กลางวัน",
              title: "ป่าที่หายใจ",
              body: "น้ำขึ้นน้ำลงเปลี่ยนหน้าตาป่าวันละสองครั้ง ปูก้ามดาบ ปลาตะเพียน และรากหายใจคือตัวละครหลักของทุกเช้า",
            },
            {
              id: "firefly",
              k: "กลางคืน",
              title: "ฟ้าดาวของหิ่งห้อย",
              body: "ยามมืด ดงลำพูส่องประกายเป็นพันดวง ก่อนแวะตลาดกลางคืนที่ชุมชนเปิดรับแขกด้วยขนมมาดูฆาตง",
            },
            {
              id: "migration",
              k: "พ.ย.–มี.ค.",
              title: "ฤดูของนกอพยพ",
              body: "นับพันปีกจากไซบีเรียมาพักในโคลนตมบางปู รอบเช้าหกโมงคือช่วงเวลาที่พวกมันขยับกินอาหาร",
            },
          ].map((s) => (
            <Link
              key={s.id}
              to="/booking"
              search={{ pkg: s.id as "year" | "firefly" | "migration" }}
              className="group rounded-[2rem] border border-white/10 p-7 transition-colors hover:border-white/25 hover:bg-white/5"
            >
              <p className="text-[0.65rem] tracking-[0.3em] text-accent uppercase">{s.k}</p>
              <h3 className="font-display mt-3 text-2xl font-medium">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <span className="mt-5 inline-block text-xs tracking-[0.25em] text-muted-foreground uppercase transition-colors group-hover:text-accent">
                จองฤดูนี้ →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 08 · Digital Experience */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-5 sm:pb-32">
        <div className="glass-strong overflow-hidden">
          <div className="grid gap-10 p-8 sm:p-14 lg:grid-cols-2">
            <div>
              <Eyebrow n="08" label="Digital Experience" />
              <h2 className="font-display mt-6 text-3xl leading-tight font-light sm:text-5xl">
                เทคโนโลยีที่หายตัวไปในป่า
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                ตั๋ว แผนที่ และการเช็คอินทำงานเบา ๆ อยู่เบื้องหลัง
                เพื่อให้คุณเก็บใบหูกวาไว้ในกระเป๋า แทนที่จะก้มมองหน้าจอ
              </p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { to: "/tickets", t: "Digital Ticket", d: "ตั๋วลายเฉพาะของแต่ละแพ็กเกจ" },
                  { to: "/tickets", t: "QR Check-in", d: "แสดงที่ท่าเรือ ไม่ต้องพิมพ์อะไร" },
                  { to: "/live", t: "Boat Tracking", d: "ตามตำแหน่งเรือแบบสดระหว่างล่อง" },
                  { to: "/membership", t: "Membership", d: "ของที่ระลึกลายพิเศษสำหรับสมาชิก" },
                ].map((f) => (
                  <li key={f.t}>
                    <Link
                      to={f.to}
                      className="block rounded-2xl border border-white/10 px-5 py-4 transition-colors hover:border-white/25 hover:bg-white/5"
                    >
                      <p className="text-sm tracking-[0.15em] uppercase">{f.t}</p>
                      <p className="mt-1.5 text-xs text-muted-foreground">{f.d}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-3 gap-3 self-center">
              {(["forest", "night", "dawn"] as const).map((t, i) => (
                <div key={t} className="h-40 overflow-hidden rounded-2xl border border-white/15 sm:h-52">
                  <TicketPattern theme={t} seed={i + 3} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 09 · Community */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-5 sm:pb-32">
        <div className="relative overflow-hidden rounded-[2.5rem]">
          <div className="relative aspect-[16/9] sm:aspect-[21/9]">
            <Photo asset={communityImg} alt="เด็ก ๆ ชุมชนบางปูเล่นโคลนหน้าอักษร I LOVE BANGPU" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          </div>
          <div className="absolute inset-0 flex items-center px-6 sm:px-12">
            <div className="max-w-md">
              <Eyebrow n="09" label="Community" />
              <h2 className="font-display mt-5 text-3xl leading-tight font-light text-white sm:text-5xl">
                ป่าที่มีคนดูแล
                <span className="block text-accent">คือป่าที่อยู่กับเราได้นาน</span>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-loose text-white/70">
                ทุกตั๋วของคุณหมุนกลับมาเป็นค่าปลูกต้นกล้า ค่าอนุรักษ์ และรายได้ของครัวเรือนในชุมชนบางปู
                — และสมาชิกที่ช่วยเล่าเรื่องป่าต่อจะได้ของที่ระลึกลายพิเศษ
              </p>
              <Link
                to="/membership"
                className="mt-7 inline-block rounded-full border border-white/25 bg-white/5 px-6 py-3 text-xs tracking-[0.2em] text-white uppercase backdrop-blur transition-colors hover:bg-white/15"
              >
                ร่วมเป็นสมาชิก →
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* 10 · Gallery */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-5 sm:pb-32">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow n="10" label="Gallery" />
            <h2 className="font-display mt-6 text-4xl font-light sm:text-5xl">วารสารภาพ</h2>
          </div>
          <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
            ภาพจากเลนส์ของคนเรือและผู้มาเยือน — เรียงตามที่มันเกิดขึ้นจริง
          </p>
        </div>
        <div className="mt-10 columns-2 gap-3 sm:gap-4 [column-fill:balance] md:columns-3">
          {[
            { a: galleryImg, h: "aspect-[3/2]", cap: "ยามเย็นที่ท่าเรือบานา" },
            { a: tunnelImg, h: "aspect-[3/4]", cap: "อุโมงค์โกงกาง" },
            { a: journeyImg, h: "aspect-square", cap: "ลำคลองสีหยก" },
            { a: wisdomImg, h: "aspect-[3/4]", cap: "เหวี่ยงแหหน้าอ่าว" },
            { a: birdsImg, h: "aspect-[4/3]", cap: "นกอพยพในโคลนตม" },
            { a: heroImg, h: "aspect-square", cap: "แสงเช้าผ่านเรือนยอด" },
            { a: peopleImg, h: "aspect-[3/4]", cap: "ทีมคนเรือชุมชน" },
            { a: discoverImg, h: "aspect-[3/2]", cap: "บางปูจากมุมสูง" },
            { a: communityImg, h: "aspect-square", cap: "เด็ก ๆ รุ่นใหม่ของป่า" },
          ].map((g, i) => (
            <figure key={i} className="mb-3 break-inside-avoid sm:mb-4">
              <div className={"relative overflow-hidden rounded-2xl " + g.h}>
                <Photo asset={g.a} alt={g.cap} />
              </div>
              <figcaption className="mt-2 text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                {g.cap}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 11 · Final CTA */}
      <section className="mx-auto max-w-4xl px-4 pb-24 sm:px-5 sm:pb-32">
        <div className="glass-strong rise p-10 text-center sm:p-16">
          <p className="text-[0.65rem] tracking-[0.35em] text-accent uppercase">11 · Begin</p>
          <h2 className="font-display mt-6 text-4xl leading-tight font-light sm:text-6xl">
            เรือออกทุกวัน
            <span className="block">ป่ารออยู่ทุกฤดู</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            เลือกฤดูที่ใช่สำหรับคุณ — กลางวันที่หายใจได้ กลางคืนที่มีดาวหิ่งห้อย หรือเช้าที่ฟ้าเต็มไปด้วยปีก
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/booking"
              className="rounded-full px-8 py-3.5 text-xs tracking-[0.2em] uppercase transition-transform duration-300 hover:-translate-y-0.5"
              style={{ background: "var(--gold)", color: "var(--gold-foreground)" }}
            >
              จองเรือ →
            </Link>
            <Link
              to="/shop"
              className="rounded-full border border-white/25 bg-white/5 px-8 py-3.5 text-xs tracking-[0.2em] uppercase transition-colors hover:bg-white/15"
            >
              ของที่ระลึก
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
