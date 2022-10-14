import { useEffect, useState } from 'react'

import axios from 'axios';
import moment from 'moment';
import ReactReadMoreReadLess from "react-read-more-read-less";
import { Gallery, Item } from 'react-photoswipe-gallery'

import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'photoswipe/dist/photoswipe.css'
import "./content.scss"
import '../../style.scss';

import { AiFillFlag, AiFillHeart, AiFillCheckCircle, AiOutlineInfoCircle } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import { BsFillShareFill, BsCheck2Circle } from 'react-icons/bs';
import { FcApproval } from 'react-icons/fc';



import ExampleHome from '../../ui/examplehome.png';
import AslanEmlakLogo from '../../ui/aslanEmlakLogo.png';
import GreenUpArrow from '../../ui/greenUpArrow.png';
import CetinAslan from '../../ui/cetinPic.png';
import HouseSizeIcon from '../../ui/houseSizeIcon'
import LedderIcon from '../../ui/ledderIcon'
import NaturalGazIcon from '../../ui/naturalGazIcon'
import RoomNumberIcon from '../../ui/roomNumberIcon'
import FurnitureIcon from '../../ui/furnitureIcon'
import BathIcon from '../../ui/bathIcon'
import PetIcon from '../../ui/petIcon'
import ParkIcon from '../../ui/parkIcon'
import BuildingIcon from '../../ui/buildingIcon';
import SecurityIcon from '../../ui/securityIcon';
import ElevatorIcon from '../../ui/elevatorIcon';
import DuesIcon from '../../ui/duesIcon';
import ConciergeIcon from '../../ui/conciergeIcon';
import BuildingTimeIcon from '../../ui/buildingTimeIcon';
import RocketIcon from '../../ui/rocketIcon';
import ShopIcon from '../../ui/shopIcon';
import EducationIcon from '../../ui/educationIcon';
import BusIcon from '../../ui/busIcon';
import HospitalIcon from '../../ui/hospitalIcon';
import RateIcon from '../../ui/rateIcon';



function Content() {
  const [contents, setContents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios("https://dev.kiramkolay.tech/api/v1/advertdetail?advert_main_id=80156")
      .then((res) => setContents(res.data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  /* İlan Tarihleri Hesaplanması */
  const images = contents?.advertDetailPhotoDatas;
  var publishDate = moment(contents.publish_date);
  var todayDay = moment().startOf('day');
  const postedDayAgo = Math.round(moment.duration(todayDay - publishDate).asDays());



  return (
    <>
      {/* İLAN RESİMLERİ */}
      <Gallery>
        <Container fluid>
          <Row id="content-photos">
            <Col className='h-100'  >
              <Item
                original={images?.[0].link}
                thumbnail={images?.[0].link}
                width="1024"
                height="768" >
                {({ ref, open }) => (
                  <img
                    ref={ref}
                    onClick={open}
                    alt=""
                    className="content-photo me-1"
                    style={{
                    }}
                    src={images?.[0].link}
                  />
                )}
              </Item>
            </Col>
            <Col className='h-100'>
              <Row className='h-50'>
                <Col className='h-100' >
                  <Item
                    original={images?.[1].link}
                    thumbnail={images?.[1].link}
                    width="1024"
                    height="768" >
                    {({ ref, open }) => (
                      <img
                        ref={ref}
                        onClick={open}
                        alt=""
                        className="content-photo pb-3"
                        style={{
                        }}
                        src={images?.[1].link}
                      />
                    )}
                  </Item>
                </Col>
              </Row>
              <Row className='h-50'>
                <Col className='h-100'>
                  <Item
                    original={images?.[2].link}
                    thumbnail={images?.[2].link}
                    width="1024"
                    height="768" >
                    {({ ref, open }) => (
                      <img
                        ref={ref}
                        onClick={open}
                        alt=""
                        className="content-photo"
                        style={{
                        }}
                        src={images?.[2].link}
                      />
                    )}
                  </Item>
                </Col>
                <Col className='h-100'>
                  <Item
                    original={images?.[3].link}
                    thumbnail={images?.[3].link}
                    width="1024"
                    height="768" >
                    {({ ref, open }) => (
                      <img
                        className="content-photo"
                        ref={ref}
                        onClick={open}
                        alt=""
                        style={{
                        }}
                        src={images?.[3].link}
                      />
                    )}
                  </Item>
                </Col>
              </Row>
            </Col>
            {/* GALERİ ORTA BUTON */}
            <div className='content-gallery'>
              <ToggleButtonGroup className='content-gallery-type' type="radio" name="options" defaultValue={1}>
                <ToggleButton id="tbg-radio-1" value={1}>
                  Fotoğraf
                </ToggleButton>
                <ToggleButton id="tbg-radio-2" value={2}>
                  Harita
                </ToggleButton>
                <ToggleButton id="tbg-radio-3" value={3}>
                  Video
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </Row>

        </Container>
      </Gallery>
      <Container className='spec-cont mt-5 container-xxl'>
        <Row className='spec-row' >
          {/* İÇERİK SOL TARAF */}
          <Col lg={9} md={7}>
            <Row>
              {/* İLAN YÖNLENDİRME */}
              <Col lg={9} md={8} className='d-flex justify-content-between mb-3'>
                <Breadcrumb >
                  <Breadcrumb.Item href="#">Kiralık Residance</Breadcrumb.Item>
                  <Breadcrumb.Item href="#"> İzmir</Breadcrumb.Item>
                  <Breadcrumb.Item href="#"> Mavişehir Mahallesi</Breadcrumb.Item>
                  <Breadcrumb.Item active>Levels Bostanlı Sitesi</Breadcrumb.Item>
                </Breadcrumb>
              </Col>
              <Col className='mb-4' lg={3} md={4}>
                <AiFillFlag className='icon-style' color="grey" size={40} />
                <BsFillShareFill className='icon-style' color="grey" size={40} />
                <AiFillHeart className='icon-style' color="grey" size={40} />
              </Col>

            </Row>
            <Row>
              {/* EVİN BAŞLIĞI VE ALTINDAKİLER */}
              <Col>
                <h1 className='montserrat-semi-bold-black-40px'>{contents.advert_header_text}<FcApproval className='ms-3' size={40} /></h1>
                <h2 className='mt-3 montserrat-medium-gray-18px'><BiTimeFive className='me-2' size={22} />{contents.publish_date_text} yayınlandı.</h2>
                <div className='d-flex justify-content-between'>
                  <b className='montserrat-semi-bold-black-18px'>Müsaitlik durumu: <b className='montserrat-medium-green-18px'>Müsait</b></b>
                  {contents.is_lease_eligibility ? false/* müsaitlik durumu */ : "true"}
                  {/*  <div><br className='montserrat-medium-red-orange-18px'>Evde kiracı var</br>
                      <br className='montserrat-medium-gray-18px'>{contents.lease_eligibility_date} tarihinde çıkacak.</br>
                      TODO:gelen veri boş, veriye bakılıp kiracı çıkış tarihi gün/ay/yıl olarak yazılacak 
                    </div>*/}
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                {/* EVİN ÖZELLİĞİ */}
                <div className='spec-back mt-5'>
                  <h3 className='montserrat-semi-bold-black-30px mt-2'>Evin Özellikleri</h3>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className='d-flex mt-4'>
                  <HouseSizeIcon />
                  <div className='ms-4 mt-2'>
                    <strong className='montserrat-semi-bold-black-20px'>{contents.net_area} m² net</strong> <br />
                    <span className='montserrat-medium-black-18px' >Konut Büyüklüğü</span>
                  </div>
                </div>
                <div className='d-flex mt-4'>
                  <BathIcon />
                  <div className='ms-4 mt-2'>
                    <strong className='montserrat-semi-bold-black-20px'>{contents.bathroom_number} Banyo </strong> <br />
                    <span className='montserrat-medium-black-18px' >Banyo Sayısı</span>
                  </div>
                </div>
                <div className='d-flex mt-4'>
                  <RoomNumberIcon />
                  <div className='ms-4 mt-2'>
                    <strong className='montserrat-semi-bold-black-20px'>{contents.room_number} Oda {contents.lounge_number} Salon</strong> <br />
                    <span className='montserrat-medium-black-18px' >Oda Sayısı</span>
                  </div>
                </div>
              </Col>
              <Col>
                <div className='d-flex mt-4'>
                  <LedderIcon />
                  <div className='ms-4 mt-2'>
                    <strong className='montserrat-semi-bold-black-20px'>7. Kat</strong> <br />
                    <span className='montserrat-medium-black-18px' >Isınma Tipi</span>
                  </div>
                </div>
                <div className='d-flex mt-4'>
                  <NaturalGazIcon />
                  <div className='ms-4 mt-2'>
                    <strong className='montserrat-semi-bold-black-20px'>{contents.heatingTypeDatas?.[0].text} </strong> <br />
                    <span className='montserrat-medium-black-18px' >Isınma Tipi</span>
                  </div>
                </div>
                <div className='d-flex mt-4'>
                  <FurnitureIcon />
                  <div className='ms-4 mt-2'>
                    <strong className='montserrat-semi-bold-black-20px'>Eşyasız </strong> <br />
                    <span className='montserrat-medium-black-18px' >Eşya Durumu</span>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button className='spec-btn mt-4' variant="outline-primary">Tüm Özellikler</Button>
              </Col>
            </Row>
            <Row>
              <Col className='mt-5'>
                <div>
                  <span className='montserrat-medium-black-18px'>Ankastre <AiFillCheckCircle className='ms-4' color='blue' /></span> <br />
                </div>
                <div className='mt-4'>
                  <span className='montserrat-medium-black-18px' >Aspirator <AiFillCheckCircle className='ms-4' color='blue' /></span>
                </div>
              </Col>
              <Col className='mt-5'>
                <div>
                  <span className='montserrat-medium-black-18px'>Ankastre <AiFillCheckCircle size={20} className='ms-4' color='blue' /></span> <br />
                </div>
                <div className='mt-4'>
                  <span className='montserrat-medium-black-18px' >Aspirator <AiFillCheckCircle size={20} className='ms-4' color='blue' /></span>
                </div>
              </Col>
              <Col className='mt-5'>
                <div>
                  <span className='montserrat-medium-black-18px'>Ankastre <AiFillCheckCircle size={20} className='ms-4' color='blue' /></span> <br />
                </div>
                <div className='mt-4'>
                  <span className='montserrat-medium-black-18px' >Aspirator <AiFillCheckCircle size={20} className='ms-4' color='blue' /></span>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                {/* CEPHE ÖZELLİĞİ KISMI */}
                <div className='spec-back mt-5'>
                  <h3 className='montserrat-semi-bold-black-30px mt-2'>Cephe Özellikleri</h3>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className='mt-5'>
                <div className='spec-check d-flex justify-content-between'>
                  <span className='montserrat-medium-black-18px'>Turknet </span><AiFillCheckCircle size={20} color='blue' />
                </div>
                <div className='spec-check mt-4 d-flex justify-content-between'>
                  <span className='montserrat-medium-black-18px' >Turk Telekom</span><AiFillCheckCircle size={20} color='blue' />
                </div>

                <hr className='spec-hr mt-4' />
                <div className='mt-4'>
                  <PetIcon color='blue' />
                  {contents.is_pet_permited ? <span className='ms-3 montserrat-semi-bold-black-20px '>Pet Dostu </span> :
                    <span className='ms-3 spec-strikethrough montserrat-semi-bold-black-20px '>Pet Dostu Değil</span>}
                </div>
                <div className='mt-4'>
                  <ParkIcon className='me-3' color='blue' />
                  {contents.property_car_park_data?.text === 'Yok' ? <span className='ms-3 spec-strikethrough montserrat-semi-bold-black-20px '>Kapalı Otopark Yok</span> :
                    <span className='ms-3 montserrat-semi-bold-black-20px '>Kapalı Otopark </span>
                  }
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className='spec-back mt-5'>
                  <h3 className='montserrat-semi-bold-black-30px mt-2'>Bina ve Sosyal İmkanlar</h3>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className='d-flex mt-4'>
                  <BuildingIcon />
                  <div className='ms-4 mt-2'>
                    <strong className='montserrat-semi-bold-black-20px'>{contents.property_current_level_data?.text}</strong>
                    <br />
                    <span className='montserrat-medium-black-18px' >Konut Yeri</span>
                  </div>
                </div>
                <div className='d-flex mt-4'>
                  <SecurityIcon />
                  <div className='ms-4 mt-2'>
                    {contents.property_security_data?.text === 'Yok' ? <strong className='montserrat-semi-bold-black-20px'>Güvenlik Yok</strong>
                      : <strong className='montserrat-semi-bold-black-20px'>Güvenlik Var</strong>}
                    <br />
                    <span className='montserrat-medium-black-18px' >Günvelik Durumu</span>
                  </div>
                </div>
                <div className='d-flex mt-4'>
                  <ElevatorIcon />
                  <div className='ms-4 mt-2'>
                    {contents.is_elevator ? <strong className='montserrat-semi-bold-black-20px'>Mevcut</strong>
                      : <strong className='montserrat-semi-bold-black-20px'>Mevcut Değil</strong>}
                    <br />
                    <span className='montserrat-medium-black-18px' >Asonsör Durumu</span>
                  </div>
                </div>
              </Col>
              <Col>
                <div className='d-flex mt-4'>
                  <DuesIcon />
                  <div className='ms-4 mt-2'>
                    <strong className='montserrat-semi-bold-black-20px'>{contents.building_dues_fee} TL </strong>
                    <br />
                    <span className='montserrat-medium-black-18px' >Aidat Ücreti</span>
                  </div>
                </div>
                <div className='d-flex mt-4'>
                  <ConciergeIcon />
                  <div className='ms-4 mt-2'>
                    {contents.property_concierge_data?.text === 'Yok' ? <strong className='montserrat-semi-bold-black-20px'>Kapıcı Yok</strong>
                      : <strong className='montserrat-semi-bold-black-20px'>Kapıcı Var</strong>}
                    <br />
                    <span className='montserrat-medium-black-18px' >Kapıcı Durumu</span>
                  </div>
                </div>
                <div className='d-flex mt-4'>
                  <BuildingTimeIcon />
                  <div className='ms-4 mt-2' >
                    <strong className='montserrat-semi-bold-black-20px'>{contents.property_age_data?.text} Yıl </strong> <br />
                    <span className='montserrat-medium-black-18px' >Bina Yaşı</span>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button className='spec-btn mt-4' variant="outline-primary">Tüm Özellikler</Button>
                <Col className='mt-5'>
                  <div className='spec-check d-flex justify-content-between'>
                    <span className='montserrat-medium-black-18px'>Turknet </span><AiFillCheckCircle size={20} color='blue' />
                  </div>
                  <div className='spec-check mt-4 d-flex justify-content-between'>
                    <span className='montserrat-medium-black-18px' >Turk Telekom</span><AiFillCheckCircle size={20} color='blue' />
                  </div>
                  <div className='spec-check mt-4 d-flex justify-content-between'>
                    <span className='montserrat-medium-black-18px'>Vodafone </span><AiFillCheckCircle size={20} color='blue' />
                  </div>
                </Col>
              </Col>
            </Row>
            <Row>
              {/* İLAN AÇIKLAMASI */}
              <Col>
                <div className='spec-back mt-5'>
                  <h3 className='mb-3 montserrat-semi-bold-black-30px mt-2'>İlan Açıklaması</h3>
                </div>
                <br />

                <ReactReadMoreReadLess

                  charLimit={200}
                  readMoreText={"Daha Fazla Göster ˅"}
                  readLessText={"Daha Az Göster ^"}
                >
                  İstanbulun en nezih semtinde en güzel ve büyük dairelerden birisi olan dairemiz 4+2 kullanım alanına sahiptir. İçerisi fotograflarda görüldüğünden daha iyi olup. 1 sınıf işçilik ve malzemeyle sıfırlanmıştır. Birinci katta boğaza bakan köprüyü gören geniş bir salon,hol,mutfak,oda ve banyo mevcuttur.
                  İkinci katta 38 m2 yatak odası,giyinme odası,banyo,mutfak,ufak ardiye,net 26 m2 oda,kış balkonu ve terası mevcuttur. Üçüncü katın girişinde çamaşır odası ve 3. katta hizmetli odası bulunmaktadır. Giriş kat 42mt salon net olup komple yerden ısıtmadır. Salon lamine parke, gizli aydınlatma led olup lake oda içi kapıları mevcuttur.
                </ReactReadMoreReadLess>
              </Col>
            </Row>

            <Row>
              <hr className='spec-hr mt-4' />
              <Col xs='auto'>

                <img src={ExampleHome} alt="examplehome" />
              </Col>
              <Col className='mt-3'>
                <span className='montserrat-semi-bold-black-20px'>Levels Bostanlı Sitesi</span>
                <div className='mt-4'>
                  <span className='montserrat-medium-black-18px' >Karşıyaka/Bostanlı İZMİR</span>
                </div>
                <br />
                <span className='montserrat-medium-gray-16px' >Levels Bostanlı Sitesi sunduğu sosyal olanaklar ve teknoloji alt yapısı ile konforlu ve güvenli bir yaşam imkanı sunuyor. </span>
              </Col>

            </Row>
            <Row>
              {/* İHTİYAÇ KISMI */}
              <Col>
                <div className='spec-back mt-5'>
                  <h3 className='montserrat-semi-bold-black-30px mt-2'>Bu mülkü kiralamak için neye ihtiyacım var?</h3>
                </div>
                <div className='mt-4 mb-4'>
                  <span className='montserrat-medium-black-20px'>
                    Kiralama başvurusu yapan herkesin kiracılık profilini değerlendiririz. Beyan
                    ettiğiniz net gelir, kiralanmak istenen mülkün 2.5 kat üzerinde olmalıdır. Kiralama
                    şansınızı arttırmak için sizinle birlikte yaşayacak olan en fazla 4 kişinin gelirlerini de
                    başvurunuzda belirtebilirsiniz.
                  </span>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div className='mb-1'>
                  <span className='me-4 montserrat-semi-bold-black-20px'>İyi bir Sekizincikat notu nasıl alınır?</span>
                  <RocketIcon />
                </div>
                <div className='mb-3'>
                  <BsCheck2Circle size={30} color='#16B8F3' />
                  <span className='ms-3 montserrat-semi-bold-black-18px' >İyi bir findeks notu</span>
                </div>
                <div className='mb-3'>
                  <BsCheck2Circle size={30} color='#16B8F3' />
                  <span className='ms-3 montserrat-semi-bold-black-18px' >2.5 kat kuralına uygun beyan edilen net gelir</span>
                </div>
                <div className='mb-3'>
                  <BsCheck2Circle size={30} color='#16B8F3' />
                  <span className='ms-3 montserrat-semi-bold-black-18px' >Kiralanmak istenen eve uygun bir kiracı profili</span>
                </div>
              </Col>
            </Row>
            <Row>
              {/* KONUM ÖZELLİKLERİ */}
              <Col>
                <hr className='spec-hr mt-4' />
                <div className='mb-4'>
                  <span className='montserrat-semi-bold-black-20px' > Konum Özellikleri</span>
                </div>
                <Row>
                  <Col>
                    <div className='mb-5 mt-2'>
                      <ShopIcon />
                    </div>

                    <EducationIcon />
                    <div className='mt-4'>
                      <span className='mb-1 edu-size d-flex justify-content-between montserrat-medium-gray-16px' ><span>Cemal Seven İlköğretim Okulu</span><span>0.4 km</span></span>
                      <span className='mb-1 edu-size d-flex justify-content-between montserrat-medium-gray-16px' ><span>Karşıyaka Anadolu Lisesi</span><span>1.1 km</span></span>
                      <span className='mb-1 edu-size d-flex justify-content-between montserrat-medium-gray-16px' ><span>Zübeyde Hanım Anaokulu</span><span>1.5 km</span></span>
                      <span className='mb-1 edu-size d-flex justify-content-between montserrat-medium-gray-16px' ><span>İzmir Katip Çelebi Üniversitesi</span><span>3.5 km</span></span>
                    </div>


                  </Col>
                  <Col>
                    <div className='mb-5 mt-2'>
                      <BusIcon />
                    </div>
                    <HospitalIcon />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          {/* İçerik Sağ taraf */}
          <Col lg={3} md={5}>
            <Card className='rent-card mt-4' style={{ width: '24rem' }}>
              <Card.Body>
                <Row>
                  <Col >
                    <Row>

                      <Col lg={9} >
                        <Row>
                          {/* SAĞ TARAF KİRALAMA DURUMU */}
                          <Col className='d-flex flex-column'>
                            <span className='montserrat-semi-bold-black-24px'>Kiralanmak Üzere!</span>
                            <span className='montserrat-medium-green-17px'>Bugün 101 kişi bu ilanı görünteledi!</span>
                          </Col>
                        </Row>

                      </Col>
                      <Col lg={3} >
                        <div className=''>
                          <img src={GreenUpArrow} alt="greenuparrow" />
                        </div>
                      </Col>

                    </Row>
                    <hr className='spec-hr mt-2' />
                  </Col>
                </Row>

                <div className='d-flex justify-content-between montserrat-semi-bold-black-24px'>
                  <span> Aylık Kira </span>

                  <span className='montserrat-semi-bold-black-18px'> {contents.monthly_rental_fee} TL </span>

                </div>
                <hr className='spec-hr mt-2' />
                <div className='d-flex justify-content-between'>
                  <span className='montserrat-medium-gravel-18px'> Depozito <AiOutlineInfoCircle color='#006AFF' /> </span>
                  <span className='montserrat-semi-bold-black-18px'> {contents.deposit_fee} TL </span>

                </div>
                <hr className='spec-hr mt-2' />
                <div className='d-flex justify-content-between'>
                  <span className='montserrat-medium-gravel-18px'> Emlakçı Bedeli  <AiOutlineInfoCircle color='#006AFF' /></span>
                  <span className='montserrat-semi-bold-black-18px'> {contents.normal_service_fee} TL </span>

                </div>
                <hr className='spec-hr mt-2' />
                <div className='d-flex justify-content-between'>
                  <span className='montserrat-medium-gravel-18px'> Evimi Koru Sigortası <AiOutlineInfoCircle color='#006AFF' /> </span>
                  <span className='montserrat-semi-bold-black-18px'> {contents.tenant_cashback_rate} TL </span>

                </div>
                <Button className='mt-5 btn-apply' variant="primary">Kiralamak İçin Başvur</Button>




              </Card.Body>
            </Card>


            <Card className='rent-card mt-4 mb-5' style={{ width: '24rem', height: '50rem' }}>
              <Card.Body>
                <Row>
                  {/* EMLAKCI BİLGİSİ */}
                  <Col >
                    <div className='d-flex mt-2 ms-2 flex-row'>
                      <div className='d-flex flex-row'>
                        <div className='justify-content-between'>
                          <img src={AslanEmlakLogo} alt="emlaklogo" />
                          <span className='ms-2 montserrat-semi-bold-black-18px'>ASLAN EMLAK</span>
                        </div></div>
                      <div className='ms-5 mt-3'>
                        <RateIcon />
                      </div>
                    </div>

                  </Col>
                </Row>
                <Col>
                  <div className='ms-3 mt-4'>
                    <span className='montserrat-medium-black-18px'>TAŞINMAZ TİCARETİ YETKİ BELGESİ NO: 3501906</span>
                    <hr className='spec-hr mt-2' />
                  </div>
                </Col>
                <Row>
                </Row>
                <Row>
                  <Col>

                    <div className='mt-5 d-flex justify-content-between'>
                      <span className='ms-3 align-self-center montserrat-medium-gravel-18px'> Çetin Aslan ATEŞOĞLU</span>
                      <img src={CetinAslan} alt={CetinAslan} />
                    </div>
                    <FloatingLabel className='mt-5' controlId="floatingTextarea2" label="İletmet istediğiniz mesajı yazın...">
                      <Form.Control
                        as="textarea"
                        placeholder="İletmet istediğiniz mesajı yazın..."
                        style={{ height: '200px' }}
                      />
                    </FloatingLabel>
                    <Form>

                      <div key={`default-checkbox`} className="mb-3">
                        <Form.Check
                          type={'checkbox'}
                          id={`default-checkbox`}
                          label={
                            <div>
                              <a href="#agree" className='card-link'>Kullanım Koşullarını</a>
                              <span>ve </span><a href="#conditions" className='card-link'>Gizlilik Politikasını</a><span> kabul ediyorum.</span>
                            </div>
                          }
                        />
                        <Button className='btn-apply' variant="primary">Kiralamak İçin Başvur</Button>
                      </div>


                    </Form>


                  </Col>
                </Row>




              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container >
    </>
  )
}

export default Content