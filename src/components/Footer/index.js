import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SlideIcon from '../../ui/slideIcon'
import '../../style.scss';
import './footer.scss';
import LogoWhite from '../../ui/logoWhite.png';
import AppStore from '../../ui/appstorePic.png';
import AppGallery from '../../ui/appgalleryPic.png';
import PlayStore from '../../ui/playstorePic.png';
import { AiOutlineInstagram } from 'react-icons/ai'
import { FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi'
import { TbWorld } from 'react-icons/tb'



const Footer = () =>
    <Container fluid className="bg-footer mt-5 p-5" >
        <Row>
            <Col>
                <Row>
                    <Col className="mt-4">
                        <h5 className="montserrat-semi-bold-white-20px">
                            Hakkımızda
                        </h5>
                        <SlideIcon />
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="about" className="mnav-link p-0 text-muted">Sekizincikat Nedir?</a></li>
                            <li className="nav-item mb-2"><a href="howto" className="nav-link p-0 text-muted">Nasıl Kullanılır?</a></li>
                            <li className="nav-item mb-2"><a href="prof" className="nav-link p-0 text-muted">Avantajları Nelerdir?</a></li>
                        </ul>
                    </Col>
                    <Col className="mt-4">
                        <h5 className="montserrat-semi-bold-white-20px">
                            Kariyer
                        </h5>
                        <SlideIcon />
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="gayri" className="nav-link p-0 text-muted">Gayrimenkul Ortağı</a></li>
                            <li className="nav-item mb-2"><a href="photog" className="nav-link p-0 text-muted">Fotoğrafçı Olmak</a></li>
                            <li className="nav-item mb-2"><a href="payment" className="nav-link p-0 text-muted">Ödeme ve Hizmetler</a></li>
                            <li className="nav-item mb-2"><a href="agrement" className="nav-link p-0 text-muted">Süreçler ve Sözleşmeler</a></li>
                            <li className="nav-item mb-2"><a href="trusted" className="nav-link p-0 text-muted">Güvenilir Kiracı Nedir?</a></li>
                        </ul>
                    </Col>
                    <Col className="mt-4">
                        <h5 className="montserrat-semi-bold-white-20px">
                            Evinizi Kiralayın
                        </h5>
                        <SlideIcon />
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="gayri" className="nav-link p-0 text-muted">Gayrimenkul Ortağı</a></li>
                            <li className="nav-item mb-2"><a href="photog" className="nav-link p-0 text-muted">Fotoğrafçı Olmak</a></li>
                            <li className="nav-item mb-2"><a href="payment" className="nav-link p-0 text-muted">Ödeme ve Hizmetler</a></li>
                            <li className="nav-item mb-2"><a href="agrement" className="nav-link p-0 text-muted">Süreçler ve Sözleşmeler</a></li>
                            <li className="nav-item mb-2"><a href="trusted" className="nav-link p-0 text-muted">Güvenilir Kiracı Nedir?</a></li>
                        </ul>
                    </Col>
                    <Col className="mt-4">
                        <h5 className="montserrat-semi-bold-white-20px">
                            Yardım ve Destek
                        </h5>
                        <SlideIcon />
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="gayri" className="nav-link p-0 text-muted">Sıkça Sorulan Sorular</a></li>
                            <li className="nav-item mb-2"><a href="photog" className="nav-link p-0 text-muted">Bilgi Merkezi</a></li>
                            <li className="nav-item mb-2"><a href="payment" className="nav-link p-0 text-muted">Destek Hattı</a></li>
                        </ul>
                    </Col>
                    <Col className="mt-4">
                        <Row>
                            <Col>
                                <div className="info-footer-card">
                                    <img className="mb-4" src={LogoWhite} alt={LogoWhite} />
                                    <span className="montserrat-medium-white-18px">Sekizincikat Bilişim Teknolojileri LTD. ŞTİ
                                        Taşınmaz Ticareti Yetki Belgesi: 0258645</span>
                                    <div className="mt-3 d-flex justify-content-end gap-3">
                                        <a href="#ins"> <AiOutlineInstagram size={30} color="white" /></a>
                                        <a href="#face">   <FiFacebook size={30} color="white" /></a>
                                        <a href="#twit">   <FiTwitter size={30} color="white" /></a>
                                        <a href="#linke">   <FiLinkedin size={30} color="white" /></a>
                                    </div>
                                </div>


                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Col>
        </Row>
        <Row>
            <Col className="mt-4 gap-2 d-flex justify-content-end" >
                <a href="#appstorelink"> <img src={AppStore} alt="SocialIcons" /></a>
                <a href="#appgallerylink"> <img src={AppGallery} alt="SocialIcons" /></a>
                <a href="#playstorelink"> <img src={PlayStore} alt="SocialIcons" /></a>
            </Col>
        </Row>
        <div id="footer-last"></div>
        <Row>
            <Col className="d-flex gap-5">
                <span className="montserrat-medium-white-14px">© 2021 Tüm Hakları Saklıdır.</span>
                <a href="about" className="montserrat-medium-white-14px">Gizlilik Politikası</a>
                <a href="about" className="mnav-link p-0 text-muted">Kullanım Şartı</a>

            </Col>
            <Col className="d-flex justify-content-end">
                <a href="about" className="me-2 montserrat-medium-white-14px">Türkçe (TR).  </a><TbWorld className="me-4" color="white" size={20} />
                <span className="montserrat-medium-white-14px">Versiyon: V 0.0.0.1</span>
            </Col>
        </Row>

    </Container >

export default Footer