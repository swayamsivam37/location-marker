import L, { map } from "leaflet";

export interface MarkOnMap {
    location: {
        lat: number;
        lng: number;
    };
    getContent(): string;
}

export class CustomMap {
  private leafLetMap: L.Map;
  private googleMap: google.maps.Map;
  private useGoogle: boolean = false;
  constructor(useGoogle: boolean) {
    if (useGoogle) {
      this.useGoogle = useGoogle;
      this.initGoogleMap();
    } else {
      this.initLeafLetMap();
    }
  }

  initGoogleMap(): void {
    this.googleMap = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      { zoom: 1, center: { lat: 0, lng: 0 } }
    );
  }

  initLeafLetMap(): void {
    this.leafLetMap = L.map(
      document.getElementById("map") as HTMLElement
    ).setView([0, 0], 2);
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://www.carto.com/">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 20,
      }
    ).addTo(this.leafLetMap);
  }

  addMarkerInGoogleMap(markable: MarkOnMap): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: markable.location,
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: markable.getContent(),
      });
      infoWindow.open({
        map: this.googleMap,
        anchor: marker,
      });
    });
  }

  addMarkerInLeafLetMap(markable: MarkOnMap): void {
    var marker = L.marker(markable.location).addTo(this.leafLetMap);
    marker.addEventListener("click", ()=>{
      const content = markable.getContent();
      marker.bindPopup(content);
    })
  }

  addMarker(markable: MarkOnMap): void {
    if (this.useGoogle) {
      this.addMarkerInGoogleMap(markable);
    } else {
      this.addMarkerInLeafLetMap(markable);
    }
  }

}
