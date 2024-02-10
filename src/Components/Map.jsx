import React from 'react';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import '../App.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Popup, CircleMarker, Tooltip } from 'react-leaflet';

const center = [43.485259, 43.607081];
const cheg = [43.391289, 43.334073];
const ozero = [43.227573, 43.562380];
const babug = [43.276721, 43.548861];

const Map=()=> {
  return(
    <div>
       <MapContainer
       center={center}
       zoom={10}
       style={{
         width: '100vw',
         height: '625px'
       }}
       >
         <TileLayer
           url='https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=UjPBM3Bn5672Yl83fAwv'
           attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
           />
         <CircleMarker
          center={center}
          pathOptions={{color: 'blue'}}
          radius={10}
         >
         <Popup>
            Мы находимся здесь
          </Popup>
          <Tooltip>
            Нальчик
          </Tooltip>
          </CircleMarker>

          <CircleMarker
          center={cheg}
          pathOptions={{color: 'red'}}
          radius={10}
         >
         <Popup>
            Смотровая площадка
          </Popup>
          <Tooltip>
            Чегемские водопады
          </Tooltip>
          </CircleMarker>

          <CircleMarker
          center={ozero}
          pathOptions={{color: 'brown'}}
          radius={10}
         >
         <Popup>
         Озеро Верхнее голубое
          </Popup>
          <Tooltip>
            Голубые озера
          </Tooltip>
          </CircleMarker>

          <CircleMarker
          center={babug}
          pathOptions={{color: 'yellow'}}
          radius={10}
         >
         <Popup>
         Село Бабугент
          </Popup>
          <Tooltip>
            Верхняя Балкария
          </Tooltip>
          </CircleMarker>
       </MapContainer>
    </div>
 
  )
}
export default Map;