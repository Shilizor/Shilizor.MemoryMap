import {
    YMaps,
    Map,
    Placemark,
    Polygon,
    Clusterer,
  } from "@pbe/react-yandex-maps";
  import polygons from "./data/Polygon";
  import monuments from "./data/Monuments";
  
  const MapYandex = ({mapStateYandex, handleLocationClick, mapRef}) => {
    return (
      <div className="map-container">
        <YMaps query={{ apikey: "e74efa34-85b1-414e-8652-32af30468533" }}>
          <Map
            state={mapStateYandex}
            modules={["layout.ImageWithContent"]}
            className="map"
            instanceRef={(ref) =>{
              mapRef.current = ref;
            }}
          >
            {polygons.map((polygon) => (
              <>
                <Polygon
                  key={polygon.id}
                  geometry={polygon.coordinates}
                  options={polygon.options}
                />
              </>
            ))}
            <Clusterer
              options={{
                preset: "islands#invertedVioletClusterIcons",
                groupByCoordinates: false,
              }}
            >
              {monuments.map((obj) => (
                <Placemark
                  key={obj.id}
                  geometry={obj.coordinates}
                  options={{
                    iconLayout: "default#image",
                    iconImageHref: obj.icon.iconImageHref,
                    iconImageSize: obj.icon.iconImageSize,
                    iconImageOffset: obj.icon.iconImageOffset,
                  }}
                  onClick={() => handleLocationClick(obj)}
                />
              ))}
            </Clusterer>
          </Map>
        </YMaps>
      </div>
    );
  };
  
  export default MapYandex;
  