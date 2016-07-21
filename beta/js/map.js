$(document).ready(function() {
    /*
    Icons
    */

    var gymIcons = new ol.style.Style({
        image: new ol.style.Icon({
          src: 'icons/gym.png'
        })
    });

    var plain = new ol.layer.Tile({
        source: new ol.source.OSM()
    });

    //Pokemon Icons (<name>Icon)
    var BulbasaurIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/001.png'
        })
    });
    var IvysaurIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/002.png'
        })
    });
    var VenusaurIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/003.png'
        })
    });
    var CharmanderIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/004.png'
        })
    });
    var CharmeleonIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/005.png'
        })
    });
    var CharizardIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/006.png'
        })
    });
    var SquirtleIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/007.png'
        })
    });
    var WartortleIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/008.png'
        })
    });
    var BlastoiseIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/009.png'
        })
    });
    var CaterpieIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/010.png'
        })
    });
    var MetapodIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/011.png'
        })
    });
    var ButterfreeIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/012.png'
        })
    });
    var WeedleIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/013.png'
        })
    });
    var KakunaIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/014.png'
        })
    });
    var BeedrillIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/015.png'
        })
    });
    var PidgeyIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/016.png'
        })
    });
    var PidgeottoIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/017.png'
        })
    });
    var PidgeotIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/018.png'
        })
    });
    var RattataIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/019.png'
        })
    });
    var RaticateIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/020.png'
        })
    });
    var SpearowIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/021.png'
        })
    });
    var FearowIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/022.png'
        })
    });
    var EkansIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/023.png'
        })
    });
    var ArbokIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/024.png'
        })
    });
    var PikachuIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/025.png'
        })
    });
    var RaichuIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/026.png'
        })
    });
    var SandshrewIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/027.png'
        })
    });
    var SandslashIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/028.png'
        })
    });
    var NidoranFIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/029.png'
        })
    });
    var NidorinaIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/030.png'
        })
    });
    var NidoqueenIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/031.png'
        })
    });
    var NidoranMIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/032.png'
        })
    });
    var NidorinoIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/033.png'
        })
    });
    var NidokingIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/034.png'
        })
    });
    var ClefairyIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/035.png'
        })
    });
    var ClefableIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/036.png'
        })
    });
    var VulpixIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/037.png'
        })
    });
    var NinetalesIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/038.png'
        })
    });
    var JigglypuffIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/039.png'
        })
    });
    var WigglytuffIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/040.png'
        })
    });
    var ZubatIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/041.png'
        })
    });
    var GolbatIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/042.png'
        })
    });
    var OddishIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/043.png'
        })
    });
    var GloomIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/044.png'
        })
    });
    var VileplumeIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/045.png'
        })
    });
    var ParasIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/046.png'
        })
    });
    var ParasectIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/047.png'
        })
    });
    var VenonatIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/048.png'
        })
    });
    var VenomothIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/049.png'
        })
    });
    var DiglettIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/050.png'
        })
    });
    var DugtrioIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/051.png'
        })
    });
    var MeowthIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/052.png'
        })
    });
    var PersianIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/053.png'
        })
    });
    var PsyduckIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/054.png'
        })
    });
    var GolduckIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/055.png'
        })
    });
    var MankeyIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/056.png'
        })
    });
    var PrimeapeIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/057.png'
        })
    });
    var GrowlitheIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/058.png'
        })
    });
    var ArcanineIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/059.png'
        })
    });
    var PoliwagIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/060.png'
        })
    });
    var PoliwhirlIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/061.png'
        })
    });
    var PoliwrathIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/062.png'
        })
    });
    var AbraIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/063.png'
        })
    });
    var KadabraIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/064.png'
        })
    });
    var AlakazamIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/065.png'
        })
    });
    var MachopIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/066.png'
        })
    });
    var MachokeIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/067.png'
        })
    });
    var MachampIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/068.png'
        })
    });
    var BellsproutIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/069.png'
        })
    });
    var WeepinbellIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/070.png'
        })
    });
    var VictreebelIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/071.png'
        })
    });
    var TentacoolIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/072.png'
        })
    });
    var TentacruelIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/073.png'
        })
    });
    var GeodudeIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/074.png'
        })
    });
    var GravelerIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/075.png'
        })
    });
    var GolemIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/076.png'
        })
    });
    var PonytaIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/077.png'
        })
    });
    var RapidashIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/078.png'
        })
    });
    var SlowpokeIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/079.png'
        })
    });
    var SlowbroIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/080.png'
        })
    });
    var MagnemiteIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/081.png'
        })
    });
    var MagnetonIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/082.png'
        })
    });
    var FarfetchdIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/083.png'
        })
    });
    var DoduoIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/084.png'
        })
    });
    var DodrioIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/085.png'
        })
    });
    var SeelIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/086.png'
        })
    });
    var DewgongIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/087.png'
        })
    });
    var GrimerIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/088.png'
        })
    });
    var MukIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/089.png'
        })
    });
    var ShellderIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/090.png'
        })
    });
    var CloysterIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/091.png'
        })
    });
    var GastlyIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/092.png'
        })
    });
    var HaunterIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/093.png'
        })
    });
    var GengarIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/094.png'
        })
    });
    var OnixIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/095.png'
        })
    });
    var DrowzeeIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/096.png'
        })
    });
    var HypnoIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/097.png'
        })
    });
    var KrabbyIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/098.png'
        })
    });
    var KinglerIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/099.png'
        })
    });
    var VoltorbIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/100.png'
        })
    });
    var ElectrodeIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/101.png'
        })
    });
    var ExeggcuteIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/102.png'
        })
    });
    var ExeggutorIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/103.png'
        })
    });
    var CuboneIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/104.png'
        })
    });
    var MarowakIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/105.png'
        })
    });
    var HitmonleeIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/106.png'
        })
    });
    var HitmonchanIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/107.png'
        })
    });
    var LickitungIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/108.png'
        })
    });
    var KoffingIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/109.png'
        })
    });
    var WeezingIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/110.png'
        })
    });
    var RhyhornIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/111.png'
        })
    });
    var RhydonIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/112.png'
        })
    });
    var ChanseyIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/113.png'
        })
    });
    var TangelaIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/114.png'
        })
    });
    var KangaskhanIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/115.png'
        })
    });
    var HorseaIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/116.png'
        })
    });
    var SeadraIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/117.png'
        })
    });
    var GoldeenIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/118.png'
        })
    });
    var SeakingIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/119.png'
        })
    });
    var StaryuIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/120.png'
        })
    });
    var StarmieIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/121.png'
        })
    });
    var Mr.MimeIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/122.png'
        })
    });
    var ScytherIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/123.png'
        })
    });
    var JynxIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/124.png'
        })
    });
    var ElectabuzzIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/125.png'
        })
    });
    var MagmarIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/126.png'
        })
    });
    var PinsirIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/127.png'
        })
    });
    var TaurosIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/128.png'
        })
    });
    var MagikarpIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/129.png'
        })
    });
    var GyaradosIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/130.png'
        })
    });
    var LaprasIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/131.png'
        })
    });
    var DittoIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/132.png'
        })
    });
    var EeveeIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/133.png'
        })
    });
    var VaporeonIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/134.png'
        })
    });
    var JolteonIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/135.png'
        })
    });
    var FlareonIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/136.png'
        })
    });
    var PorygonIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/137.png'
        })
    });
    var OmanyteIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/138.png'
        })
    });
    var OmastarIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/139.png'
        })
    });
    var KabutoIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/140.png'
        })
    });
    var KabutopsIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/141.png'
        })
    });
    var AerodactylIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/142.png'
        })
    });
    var SnorlaxIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/143.png'
        })
    });
    var ArticunoIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/144.png'
        })
    });
    var ZapdosIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/145.png'
        })
    });
    var MoltresIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/146.png'
        })
    });
    var DratiniIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/147.png'
        })
    });
    var DragonairIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/148.png'
        })
    });
    var DragoniteIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/149.png'
        })
    });
    var MewtwoIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/150.png'
        })
    });
    var MewIcon = new ol.layer.Tile({
        image: new ol.style.Icon({
            src: 'icons/151.png'
        })
    });
    /*
    Layers
    */
    var gymsLayer = new ol.layer.Vector({
        title: 'Gyms Layer',
        source: new ol.source.Vector({
            format: new ol.format.GeoJSON(),
            url: 'data/gyms.json'
        }),
        style: gymIcons
    });

    //original pokestop layer
    var pokestopsLayer = new ol.layer.Vector({
        title: 'Pokestops Layer',
        source: new ol.source.Vector({
            format: new ol.format.GeoJSON(),
            url: 'data/pokestops.json'
        }),
    });

     var pokestopsLayermelbCBD = new ol.layer.Vector({
        title: 'Pokestops Layer (Melb-CBD)',
        source: new ol.source.Vector({
            format: new ol.format.GeoJSON(),
            url: 'data/pokestops/pokestops-melbcbd.json'
        }),
    });

    var bulbasaurLayer = new ol.layer.Vector({
        title: 'Bulbasaur Layer',
        source: new ol.source.Vector({
            format: new ol.format.GeoJSON(),
            url: 'data/pokemon/bulbasaur.json'
        }),
        style: BulbasaurIcon
    });

    var map = new ol.Map({
        target: 'map',
        layers: [plain,pokestopsLayer,pokestopsLayermelbCBD,gymsLayer],
        view: new ol.View({
        center: ol.proj.fromLonLat([-164,0]), //centers at middle of Pacific Ocean 
        zoom: 2.1 //zoom setting is set that 99% of the world is showing
        })
    });

    var displayFeatureInfo = function(pixel) {
    var features = [];
    map.forEachFeatureAtPixel(pixel, function(feature, layer) {
        features.push(feature);
    });
    if (features.length > 0) {
        var info = [];
        var i, ii;
        for (i = 0, ii = features.length; i < ii; ++i) {
        info.push(features[i].get('name'));
        }
        document.getElementById('info').innerHTML = info.join(', ') || '(unknown)';
        map.getTarget().style.cursor = 'pointer';
    } else {
        document.getElementById('info').innerHTML = '&nbsp;';
        map.getTarget().style.cursor = '';
    }
    };

    map.on('pointermove', function(evt) {
    if (evt.dragging) {
        return;
    }

    var pixel = map.getEventPixel(evt.originalEvent);
        displayFeatureInfo(pixel);
    });
    
    //Adds Full Screen control
    var myFullScreenControl = new ol.control.FullScreen();
    map.addControl(myFullScreenControl);

    map.addOverlay(popup);

    map.on('click', function(evt) {
        var feature = map.forEachFeatureAtPixel(evt.pixel,
        function(feature, layer) {
            return feature;
        });
        if (feature) {
            var geometry = feature.getGeometry();
            var coord = geometry.getCoordinates();
            popup.setPosition(coord);
            $(element).popover({
            'placement': 'top',
            'html': true,
            'content': feature.get('name')
            });
            $(element).popover('show');
        } else {
            $(element).popover('destroy');
        }
    });
});
