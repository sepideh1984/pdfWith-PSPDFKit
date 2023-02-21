import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf';
import PSPDFKit from 'pspdfkit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  
  
  title = "PSPDFKit for Web Angular Example";

  ngAfterViewInit(): void {
    PSPDFKit.load({
      // Use the assets directory URL as a base URL. PSPDFKit will download its library assets from here.
      baseUrl: location.protocol + "//" + location.host + "/assets/",
      document: "/assets/example.pdf",
      container: ".pspdfkit-container",
  
    }).then((instance) => {
      // For the sake of this demo, store the PSPDFKit for Web instance
      // on the global object so that you can open the dev tools and
      // play with the PSPDFKit API.

      (<any>window).instance = instance;
    });
  }
}

