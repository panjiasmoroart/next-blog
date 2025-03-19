import Image from "next/image";
import Menu from "@/components/Header/Menu/Menu";
import TopNav from "@/components/Header/TopNav/TopNav";
import Slider from "@/components/Slider/Slider";
import Service from "@/components/Service/Service";
import PaymentGateway from "@/components/PaymentGateway/PaymentGateway";
import CaseStudy from "@/components/CaseStudy/CaseStudy";
import PaymentGatewayTwo from "@/components/PaymentGateway/PaymentGatewayTwo";
import FormRequest from "@/components/FormRequest/FormRequest";
import Testimonial from "@/components/Testimonial/Testimonial";
import serviceData from '@/data/service.json';
import blogData from '@/data/blog.json'
import Blog from "@/components/Blog/Blog";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <header id="header">
        <TopNav />
        <Menu />
      </header>

       <main className="content">
          <Slider />
          <Service data={serviceData} />
          <PaymentGateway />
          <CaseStudy />
          <PaymentGatewayTwo />
          <FormRequest />
          <Testimonial />
          <Blog data={blogData} />
       </main>
    </div>
  );
}
