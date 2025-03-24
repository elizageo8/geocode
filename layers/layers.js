var wms_layers = [];


        var lyr_GOOGLE1_0 = new ol.layer.Tile({
            'title': 'GOOGLE1',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_APOSTASEIS_1 = new ol.format.GeoJSON();
var features_APOSTASEIS_1 = format_APOSTASEIS_1.readFeatures(json_APOSTASEIS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APOSTASEIS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APOSTASEIS_1.addFeatures(features_APOSTASEIS_1);
var lyr_APOSTASEIS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APOSTASEIS_1, 
                style: style_APOSTASEIS_1,
                popuplayertitle: 'APOSTASEIS',
                interactive: true,
                title: '<img src="styles/legend/APOSTASEIS_1.png" /> APOSTASEIS'
            });
var format_TR_IX_2 = new ol.format.GeoJSON();
var features_TR_IX_2 = format_TR_IX_2.readFeatures(json_TR_IX_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TR_IX_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TR_IX_2.addFeatures(features_TR_IX_2);
var lyr_TR_IX_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TR_IX_2, 
                style: style_TR_IX_2,
                popuplayertitle: 'TR_IX',
                interactive: true,
                title: '<img src="styles/legend/TR_IX_2.png" /> TR_IX'
            });
var format_TRAD_3 = new ol.format.GeoJSON();
var features_TRAD_3 = format_TRAD_3.readFeatures(json_TRAD_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRAD_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRAD_3.addFeatures(features_TRAD_3);
var lyr_TRAD_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRAD_3, 
                style: style_TRAD_3,
                popuplayertitle: 'TR-AD',
                interactive: true,
                title: '<img src="styles/legend/TRAD_3.png" /> TR-AD'
            });
var format_TRMMM_4 = new ol.format.GeoJSON();
var features_TRMMM_4 = format_TRMMM_4.readFeatures(json_TRMMM_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRMMM_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRMMM_4.addFeatures(features_TRMMM_4);
var lyr_TRMMM_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRMMM_4, 
                style: style_TRMMM_4,
                popuplayertitle: 'TR-MMM',
                interactive: true,
                title: '<img src="styles/legend/TRMMM_4.png" /> TR-MMM'
            });
var format_TRNoDOC_5 = new ol.format.GeoJSON();
var features_TRNoDOC_5 = format_TRNoDOC_5.readFeatures(json_TRNoDOC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRNoDOC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRNoDOC_5.addFeatures(features_TRNoDOC_5);
var lyr_TRNoDOC_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRNoDOC_5, 
                style: style_TRNoDOC_5,
                popuplayertitle: 'TR-NoDOC',
                interactive: true,
                title: '<img src="styles/legend/TRNoDOC_5.png" /> TR-NoDOC'
            });
var format_TRTAXI_6 = new ol.format.GeoJSON();
var features_TRTAXI_6 = format_TRTAXI_6.readFeatures(json_TRTAXI_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRTAXI_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRTAXI_6.addFeatures(features_TRTAXI_6);
var lyr_TRTAXI_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRTAXI_6, 
                style: style_TRTAXI_6,
                popuplayertitle: 'TR-TAXI',
                interactive: true,
                title: '<img src="styles/legend/TRTAXI_6.png" /> TR-TAXI'
            });
var format_TRUnknown_7 = new ol.format.GeoJSON();
var features_TRUnknown_7 = format_TRUnknown_7.readFeatures(json_TRUnknown_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRUnknown_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRUnknown_7.addFeatures(features_TRUnknown_7);
var lyr_TRUnknown_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRUnknown_7, 
                style: style_TRUnknown_7,
                popuplayertitle: 'TR-Unknown',
                interactive: true,
                title: '<img src="styles/legend/TRUnknown_7.png" /> TR-Unknown'
            });
var format_NO_DOC_8 = new ol.format.GeoJSON();
var features_NO_DOC_8 = format_NO_DOC_8.readFeatures(json_NO_DOC_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NO_DOC_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NO_DOC_8.addFeatures(features_NO_DOC_8);
var lyr_NO_DOC_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NO_DOC_8, 
                style: style_NO_DOC_8,
                popuplayertitle: 'NO_DOC',
                interactive: true,
                title: '<img src="styles/legend/NO_DOC_8.png" /> NO_DOC'
            });
var format_GEKY_50Km_9 = new ol.format.GeoJSON();
var features_GEKY_50Km_9 = format_GEKY_50Km_9.readFeatures(json_GEKY_50Km_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEKY_50Km_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEKY_50Km_9.addFeatures(features_GEKY_50Km_9);
var lyr_GEKY_50Km_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEKY_50Km_9, 
                style: style_GEKY_50Km_9,
                popuplayertitle: 'GE-KY_50Km',
                interactive: true,
                title: '<img src="styles/legend/GEKY_50Km_9.png" /> GE-KY_50Km'
            });
var format_GEKY1050Km_10 = new ol.format.GeoJSON();
var features_GEKY1050Km_10 = format_GEKY1050Km_10.readFeatures(json_GEKY1050Km_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEKY1050Km_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEKY1050Km_10.addFeatures(features_GEKY1050Km_10);
var lyr_GEKY1050Km_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEKY1050Km_10, 
                style: style_GEKY1050Km_10,
                popuplayertitle: 'GE-KY 10-50Km',
                interactive: true,
                title: '<img src="styles/legend/GEKY1050Km_10.png" /> GE-KY 10-50Km'
            });
var format_GEKY_10Km_11 = new ol.format.GeoJSON();
var features_GEKY_10Km_11 = format_GEKY_10Km_11.readFeatures(json_GEKY_10Km_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEKY_10Km_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEKY_10Km_11.addFeatures(features_GEKY_10Km_11);
var lyr_GEKY_10Km_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEKY_10Km_11, 
                style: style_GEKY_10Km_11,
                popuplayertitle: 'GE-KY_10Km',
                interactive: true,
                title: '<img src="styles/legend/GEKY_10Km_11.png" /> GE-KY_10Km'
            });
var format_HOSPNPS_50Km_12 = new ol.format.GeoJSON();
var features_HOSPNPS_50Km_12 = format_HOSPNPS_50Km_12.readFeatures(json_HOSPNPS_50Km_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOSPNPS_50Km_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOSPNPS_50Km_12.addFeatures(features_HOSPNPS_50Km_12);
var lyr_HOSPNPS_50Km_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HOSPNPS_50Km_12, 
                style: style_HOSPNPS_50Km_12,
                popuplayertitle: 'HOSPNPS_50Km',
                interactive: true,
                title: '<img src="styles/legend/HOSPNPS_50Km_12.png" /> HOSPNPS_50Km'
            });
var format_HOSPNPS_1050Km_13 = new ol.format.GeoJSON();
var features_HOSPNPS_1050Km_13 = format_HOSPNPS_1050Km_13.readFeatures(json_HOSPNPS_1050Km_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOSPNPS_1050Km_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOSPNPS_1050Km_13.addFeatures(features_HOSPNPS_1050Km_13);
var lyr_HOSPNPS_1050Km_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HOSPNPS_1050Km_13, 
                style: style_HOSPNPS_1050Km_13,
                popuplayertitle: 'HOSPNPS_10-50Km',
                interactive: true,
                title: '<img src="styles/legend/HOSPNPS_1050Km_13.png" /> HOSPNPS_10-50Km'
            });
var format_HOSPNPS_10Km_14 = new ol.format.GeoJSON();
var features_HOSPNPS_10Km_14 = format_HOSPNPS_10Km_14.readFeatures(json_HOSPNPS_10Km_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOSPNPS_10Km_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOSPNPS_10Km_14.addFeatures(features_HOSPNPS_10Km_14);
var lyr_HOSPNPS_10Km_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HOSPNPS_10Km_14, 
                style: style_HOSPNPS_10Km_14,
                popuplayertitle: 'HOSPNPS_10Km',
                interactive: true,
                title: '<img src="styles/legend/HOSPNPS_10Km_14.png" /> HOSPNPS_10Km'
            });
var format_MD_XDOC_15 = new ol.format.GeoJSON();
var features_MD_XDOC_15 = format_MD_XDOC_15.readFeatures(json_MD_XDOC_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MD_XDOC_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MD_XDOC_15.addFeatures(features_MD_XDOC_15);
var lyr_MD_XDOC_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MD_XDOC_15, 
                style: style_MD_XDOC_15,
                popuplayertitle: 'MD_XDOC',
                interactive: true,
                title: '<img src="styles/legend/MD_XDOC_15.png" /> MD_XDOC'
            });
var format_MD_50Km_16 = new ol.format.GeoJSON();
var features_MD_50Km_16 = format_MD_50Km_16.readFeatures(json_MD_50Km_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MD_50Km_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MD_50Km_16.addFeatures(features_MD_50Km_16);
var lyr_MD_50Km_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MD_50Km_16, 
                style: style_MD_50Km_16,
                popuplayertitle: 'MD_50Km',
                interactive: true,
                title: '<img src="styles/legend/MD_50Km_16.png" /> MD_50Km'
            });
var format_MD1050km_17 = new ol.format.GeoJSON();
var features_MD1050km_17 = format_MD1050km_17.readFeatures(json_MD1050km_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MD1050km_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MD1050km_17.addFeatures(features_MD1050km_17);
var lyr_MD1050km_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MD1050km_17, 
                style: style_MD1050km_17,
                popuplayertitle: 'MD 10-50km',
                interactive: true,
                title: '<img src="styles/legend/MD1050km_17.png" /> MD 10-50km'
            });
var format_MD_10km_18 = new ol.format.GeoJSON();
var features_MD_10km_18 = format_MD_10km_18.readFeatures(json_MD_10km_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MD_10km_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MD_10km_18.addFeatures(features_MD_10km_18);
var lyr_MD_10km_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MD_10km_18, 
                style: style_MD_10km_18,
                popuplayertitle: 'MD_10km',
                interactive: true,
                title: '<img src="styles/legend/MD_10km_18.png" /> MD_10km'
            });

lyr_GOOGLE1_0.setVisible(true);lyr_APOSTASEIS_1.setVisible(true);lyr_TR_IX_2.setVisible(true);lyr_TRAD_3.setVisible(true);lyr_TRMMM_4.setVisible(true);lyr_TRNoDOC_5.setVisible(true);lyr_TRTAXI_6.setVisible(true);lyr_TRUnknown_7.setVisible(true);lyr_NO_DOC_8.setVisible(true);lyr_GEKY_50Km_9.setVisible(true);lyr_GEKY1050Km_10.setVisible(true);lyr_GEKY_10Km_11.setVisible(true);lyr_HOSPNPS_50Km_12.setVisible(true);lyr_HOSPNPS_1050Km_13.setVisible(true);lyr_HOSPNPS_10Km_14.setVisible(true);lyr_MD_XDOC_15.setVisible(true);lyr_MD_50Km_16.setVisible(true);lyr_MD1050km_17.setVisible(true);lyr_MD_10km_18.setVisible(true);
var layersList = [lyr_GOOGLE1_0,lyr_APOSTASEIS_1,lyr_TR_IX_2,lyr_TRAD_3,lyr_TRMMM_4,lyr_TRNoDOC_5,lyr_TRTAXI_6,lyr_TRUnknown_7,lyr_NO_DOC_8,lyr_GEKY_50Km_9,lyr_GEKY1050Km_10,lyr_GEKY_10Km_11,lyr_HOSPNPS_50Km_12,lyr_HOSPNPS_1050Km_13,lyr_HOSPNPS_10Km_14,lyr_MD_XDOC_15,lyr_MD_50Km_16,lyr_MD1050km_17,lyr_MD_10km_18];
lyr_APOSTASEIS_1.set('fieldAliases', {'C_PATIENTS': 'C_PATIENTS', 'X': 'X', 'Y': 'Y', 'C_DOC': 'C_DOC', 'X1': 'X1', 'Y1': 'Y1', 'K': 'K', 'Color': 'Color', 'Shape': 'Shape', 'Borders': 'Borders', });
lyr_TR_IX_2.set('fieldAliases', {'C_PATIENTS': 'C_PATIENTS', 'X': 'X', 'Y': 'Y', 'C_DOC': 'C_DOC', 'X1': 'X1', 'Y1': 'Y1', 'K': 'K', 'Color': 'Color', 'Shape': 'Shape', 'Borders': 'Borders', });
lyr_TRAD_3.set('fieldAliases', {'C_PATIENTS': 'C_PATIENTS', 'X': 'X', 'Y': 'Y', 'C_DOC': 'C_DOC', 'X1': 'X1', 'Y1': 'Y1', 'K': 'K', 'Color': 'Color', 'Shape': 'Shape', 'Borders': 'Borders', });
lyr_TRMMM_4.set('fieldAliases', {'C_PATIENTS': 'C_PATIENTS', 'X': 'X', 'Y': 'Y', 'C_DOC': 'C_DOC', 'X1': 'X1', 'Y1': 'Y1', 'K': 'K', 'Color': 'Color', 'Shape': 'Shape', 'Borders': 'Borders', });
lyr_TRNoDOC_5.set('fieldAliases', {'C_PATIENTS': 'C_PATIENTS', 'X': 'X', 'Y': 'Y', 'C_DOC': 'C_DOC', 'X1': 'X1', 'Y1': 'Y1', 'K': 'K', 'Color': 'Color', 'Shape': 'Shape', 'Borders': 'Borders', });
lyr_TRTAXI_6.set('fieldAliases', {'C_PATIENTS': 'C_PATIENTS', 'X': 'X', 'Y': 'Y', 'C_DOC': 'C_DOC', 'X1': 'X1', 'Y1': 'Y1', 'K': 'K', 'Color': 'Color', 'Shape': 'Shape', 'Borders': 'Borders', });
lyr_TRUnknown_7.set('fieldAliases', {'C_PATIENTS': 'C_PATIENTS', 'X': 'X', 'Y': 'Y', 'C_DOC': 'C_DOC', 'X1': 'X1', 'Y1': 'Y1', 'K': 'K', 'Color': 'Color', 'Shape': 'Shape', 'Borders': 'Borders', });
lyr_NO_DOC_8.set('fieldAliases', {'C_PATIENTS': 'C_PATIENTS', 'X': 'X', 'Y': 'Y', 'C_DOC': 'C_DOC', 'X1': 'X1', 'Y1': 'Y1', 'K': 'K', 'Color': 'Color', 'Shape': 'Shape', 'Borders': 'Borders', });
lyr_GEKY_50Km_9.set('fieldAliases', {'fid': 'fid', 'C_PATIENTS': 'C_PATIENTS', 'X': 'X', 'Y': 'Y', 'C_DOC': 'C_DOC', 'X1': 'X1', 'Y1': 'Y1', 'K': 'K', 'Color': 'Color', 'Shape': 'Shape', 'Borders': 'Borders', 'layer': 'layer', 'path': 'path', });
lyr_GEKY1050Km_10.set('fieldAliases', {'fid': 'fid', 'C_PATIENTS': 'C_PATIENTS', 'X': 'X', 'Y': 'Y', 'C_DOC': 'C_DOC', 'X1': 'X1', 'Y1': 'Y1', 'K': 'K', 'Color': 'Color', 'Shape': 'Shape', 'Borders': 'Borders', 'layer': 'layer', 'path': 'path', });
lyr_GEKY_10Km_11.set('fieldAliases', {'fid': 'fid', 'C_PATIENTS': 'C_PATIENTS', 'X': 'X', 'Y': 'Y', 'C_DOC': 'C_DOC', 'X1': 'X1', 'Y1': 'Y1', 'K': 'K', 'Color': 'Color', 'Shape': 'Shape', 'Borders': 'Borders', 'layer': 'layer', 'path': 'path', });
lyr_HOSPNPS_50Km_12.set('fieldAliases', {'fid': 'fid', 'C_PATIENTS': 'C_PATIENTS', 'X': 'X', 'Y': 'Y', 'C_DOC': 'C_DOC', 'X1': 'X1', 'Y1': 'Y1', 'K': 'K', 'Color': 'Color', 'Shape': 'Shape', 'Borders': 'Borders', 'layer': 'layer', 'path': 'path', });
lyr_HOSPNPS_1050Km_13.set('fieldAliases', {'fid': 'fid', 'C_PATIENTS': 'C_PATIENTS', 'X': 'X', 'Y': 'Y', 'C_DOC': 'C_DOC', 'X1': 'X1', 'Y1': 'Y1', 'K': 'K', 'Color': 'Color', 'Shape': 'Shape', 'Borders': 'Borders', 'layer': 'layer', 'path': 'path', });
lyr_HOSPNPS_10Km_14.set('fieldAliases', {'fid': 'fid', 'C_PATIENTS': 'C_PATIENTS', 'X': 'X', 'Y': 'Y', 'C_DOC': 'C_DOC', 'X1': 'X1', 'Y1': 'Y1', 'K': 'K', 'Color': 'Color', 'Shape': 'Shape', 'Borders': 'Borders', 'layer': 'layer', 'path': 'path', });
lyr_MD_XDOC_15.set('fieldAliases', {'fid': 'fid', 'C_PATIENTS': 'C_PATIENTS', 'X': 'X', 'Y': 'Y', 'C_DOC': 'C_DOC', 'X1': 'X1', 'Y1': 'Y1', 'K': 'K', 'Color': 'Color', 'Shape': 'Shape', 'Borders': 'Borders', });
lyr_MD_50Km_16.set('fieldAliases', {'fid': 'fid', 'C_PATIENTS': 'C_PATIENTS', 'X': 'X', 'Y': 'Y', 'C_DOC': 'C_DOC', 'X1': 'X1', 'Y1': 'Y1', 'K': 'K', 'Color': 'Color', 'Shape': 'Shape', 'Borders': 'Borders', });
lyr_MD1050km_17.set('fieldAliases', {'fid': 'fid', 'C_PATIENTS': 'C_PATIENTS', 'X': 'X', 'Y': 'Y', 'C_DOC': 'C_DOC', 'X1': 'X1', 'Y1': 'Y1', 'K': 'K', 'Color': 'Color', 'Shape': 'Shape', 'Borders': 'Borders', });
lyr_MD_10km_18.set('fieldAliases', {'fid': 'fid', 'C_PATIENTS': 'C_PATIENTS', 'X': 'X', 'Y': 'Y', 'C_DOC': 'C_DOC', 'X1': 'X1', 'Y1': 'Y1', 'K': 'K', 'Color': 'Color', 'Shape': 'Shape', 'Borders': 'Borders', });
lyr_APOSTASEIS_1.set('fieldImages', {'C_PATIENTS': '', 'X': '', 'Y': '', 'C_DOC': '', 'X1': '', 'Y1': '', 'K': '', 'Color': '', 'Shape': '', 'Borders': '', });
lyr_TR_IX_2.set('fieldImages', {'C_PATIENTS': '', 'X': '', 'Y': '', 'C_DOC': '', 'X1': '', 'Y1': '', 'K': '', 'Color': '', 'Shape': '', 'Borders': '', });
lyr_TRAD_3.set('fieldImages', {'C_PATIENTS': '', 'X': '', 'Y': '', 'C_DOC': '', 'X1': '', 'Y1': '', 'K': '', 'Color': '', 'Shape': '', 'Borders': '', });
lyr_TRMMM_4.set('fieldImages', {'C_PATIENTS': '', 'X': '', 'Y': '', 'C_DOC': '', 'X1': '', 'Y1': '', 'K': '', 'Color': '', 'Shape': '', 'Borders': '', });
lyr_TRNoDOC_5.set('fieldImages', {'C_PATIENTS': '', 'X': '', 'Y': '', 'C_DOC': '', 'X1': '', 'Y1': '', 'K': '', 'Color': '', 'Shape': '', 'Borders': '', });
lyr_TRTAXI_6.set('fieldImages', {'C_PATIENTS': '', 'X': '', 'Y': '', 'C_DOC': '', 'X1': '', 'Y1': '', 'K': '', 'Color': '', 'Shape': '', 'Borders': '', });
lyr_TRUnknown_7.set('fieldImages', {'C_PATIENTS': '', 'X': '', 'Y': '', 'C_DOC': '', 'X1': '', 'Y1': '', 'K': '', 'Color': '', 'Shape': '', 'Borders': '', });
lyr_NO_DOC_8.set('fieldImages', {'C_PATIENTS': '', 'X': '', 'Y': '', 'C_DOC': '', 'X1': '', 'Y1': '', 'K': '', 'Color': '', 'Shape': '', 'Borders': '', });
lyr_GEKY_50Km_9.set('fieldImages', {'fid': '', 'C_PATIENTS': '', 'X': '', 'Y': '', 'C_DOC': '', 'X1': '', 'Y1': '', 'K': '', 'Color': '', 'Shape': '', 'Borders': '', 'layer': '', 'path': '', });
lyr_GEKY1050Km_10.set('fieldImages', {'fid': '', 'C_PATIENTS': '', 'X': '', 'Y': '', 'C_DOC': '', 'X1': '', 'Y1': '', 'K': '', 'Color': '', 'Shape': '', 'Borders': '', 'layer': '', 'path': '', });
lyr_GEKY_10Km_11.set('fieldImages', {'fid': '', 'C_PATIENTS': '', 'X': '', 'Y': '', 'C_DOC': '', 'X1': '', 'Y1': '', 'K': '', 'Color': '', 'Shape': '', 'Borders': '', 'layer': '', 'path': '', });
lyr_HOSPNPS_50Km_12.set('fieldImages', {'fid': '', 'C_PATIENTS': '', 'X': '', 'Y': '', 'C_DOC': '', 'X1': '', 'Y1': '', 'K': '', 'Color': '', 'Shape': '', 'Borders': '', 'layer': '', 'path': '', });
lyr_HOSPNPS_1050Km_13.set('fieldImages', {'fid': '', 'C_PATIENTS': '', 'X': '', 'Y': '', 'C_DOC': '', 'X1': '', 'Y1': '', 'K': '', 'Color': '', 'Shape': '', 'Borders': '', 'layer': '', 'path': '', });
lyr_HOSPNPS_10Km_14.set('fieldImages', {'fid': '', 'C_PATIENTS': '', 'X': '', 'Y': '', 'C_DOC': '', 'X1': '', 'Y1': '', 'K': '', 'Color': '', 'Shape': '', 'Borders': '', 'layer': '', 'path': '', });
lyr_MD_XDOC_15.set('fieldImages', {'fid': '', 'C_PATIENTS': '', 'X': '', 'Y': '', 'C_DOC': '', 'X1': '', 'Y1': '', 'K': '', 'Color': '', 'Shape': '', 'Borders': '', });
lyr_MD_50Km_16.set('fieldImages', {'fid': '', 'C_PATIENTS': '', 'X': '', 'Y': '', 'C_DOC': '', 'X1': '', 'Y1': '', 'K': '', 'Color': '', 'Shape': '', 'Borders': '', });
lyr_MD1050km_17.set('fieldImages', {'fid': '', 'C_PATIENTS': '', 'X': '', 'Y': '', 'C_DOC': '', 'X1': '', 'Y1': '', 'K': '', 'Color': '', 'Shape': '', 'Borders': '', });
lyr_MD_10km_18.set('fieldImages', {'fid': '', 'C_PATIENTS': '', 'X': '', 'Y': '', 'C_DOC': '', 'X1': '', 'Y1': '', 'K': '', 'Color': '', 'Shape': '', 'Borders': '', });
lyr_APOSTASEIS_1.set('fieldLabels', {'C_PATIENTS': 'no label', 'X': 'no label', 'Y': 'no label', 'C_DOC': 'no label', 'X1': 'no label', 'Y1': 'no label', 'K': 'no label', 'Color': 'no label', 'Shape': 'no label', 'Borders': 'no label', });
lyr_TR_IX_2.set('fieldLabels', {'C_PATIENTS': 'no label', 'X': 'no label', 'Y': 'no label', 'C_DOC': 'no label', 'X1': 'no label', 'Y1': 'no label', 'K': 'no label', 'Color': 'no label', 'Shape': 'no label', 'Borders': 'no label', });
lyr_TRAD_3.set('fieldLabels', {'C_PATIENTS': 'no label', 'X': 'no label', 'Y': 'no label', 'C_DOC': 'no label', 'X1': 'no label', 'Y1': 'no label', 'K': 'no label', 'Color': 'no label', 'Shape': 'no label', 'Borders': 'no label', });
lyr_TRMMM_4.set('fieldLabels', {'C_PATIENTS': 'no label', 'X': 'no label', 'Y': 'no label', 'C_DOC': 'no label', 'X1': 'no label', 'Y1': 'no label', 'K': 'no label', 'Color': 'no label', 'Shape': 'no label', 'Borders': 'no label', });
lyr_TRNoDOC_5.set('fieldLabels', {'C_PATIENTS': 'no label', 'X': 'no label', 'Y': 'no label', 'C_DOC': 'no label', 'X1': 'no label', 'Y1': 'no label', 'K': 'no label', 'Color': 'no label', 'Shape': 'no label', 'Borders': 'no label', });
lyr_TRTAXI_6.set('fieldLabels', {'C_PATIENTS': 'no label', 'X': 'no label', 'Y': 'no label', 'C_DOC': 'no label', 'X1': 'no label', 'Y1': 'no label', 'K': 'no label', 'Color': 'no label', 'Shape': 'no label', 'Borders': 'no label', });
lyr_TRUnknown_7.set('fieldLabels', {'C_PATIENTS': 'no label', 'X': 'no label', 'Y': 'no label', 'C_DOC': 'no label', 'X1': 'no label', 'Y1': 'no label', 'K': 'no label', 'Color': 'no label', 'Shape': 'no label', 'Borders': 'no label', });
lyr_NO_DOC_8.set('fieldLabels', {'C_PATIENTS': 'no label', 'X': 'no label', 'Y': 'no label', 'C_DOC': 'no label', 'X1': 'no label', 'Y1': 'no label', 'K': 'no label', 'Color': 'no label', 'Shape': 'no label', 'Borders': 'no label', });
lyr_GEKY_50Km_9.set('fieldLabels', {'fid': 'no label', 'C_PATIENTS': 'no label', 'X': 'no label', 'Y': 'no label', 'C_DOC': 'no label', 'X1': 'no label', 'Y1': 'no label', 'K': 'no label', 'Color': 'no label', 'Shape': 'no label', 'Borders': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_GEKY1050Km_10.set('fieldLabels', {'fid': 'no label', 'C_PATIENTS': 'no label', 'X': 'no label', 'Y': 'no label', 'C_DOC': 'no label', 'X1': 'no label', 'Y1': 'no label', 'K': 'no label', 'Color': 'no label', 'Shape': 'no label', 'Borders': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_GEKY_10Km_11.set('fieldLabels', {'fid': 'no label', 'C_PATIENTS': 'no label', 'X': 'no label', 'Y': 'no label', 'C_DOC': 'no label', 'X1': 'no label', 'Y1': 'no label', 'K': 'no label', 'Color': 'no label', 'Shape': 'no label', 'Borders': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_HOSPNPS_50Km_12.set('fieldLabels', {'fid': 'no label', 'C_PATIENTS': 'no label', 'X': 'no label', 'Y': 'no label', 'C_DOC': 'no label', 'X1': 'no label', 'Y1': 'no label', 'K': 'no label', 'Color': 'no label', 'Shape': 'no label', 'Borders': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_HOSPNPS_1050Km_13.set('fieldLabels', {'fid': 'no label', 'C_PATIENTS': 'no label', 'X': 'no label', 'Y': 'no label', 'C_DOC': 'no label', 'X1': 'no label', 'Y1': 'no label', 'K': 'no label', 'Color': 'no label', 'Shape': 'no label', 'Borders': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_HOSPNPS_10Km_14.set('fieldLabels', {'fid': 'no label', 'C_PATIENTS': 'no label', 'X': 'no label', 'Y': 'no label', 'C_DOC': 'no label', 'X1': 'no label', 'Y1': 'no label', 'K': 'no label', 'Color': 'no label', 'Shape': 'no label', 'Borders': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_MD_XDOC_15.set('fieldLabels', {'fid': 'no label', 'C_PATIENTS': 'no label', 'X': 'no label', 'Y': 'no label', 'C_DOC': 'no label', 'X1': 'no label', 'Y1': 'no label', 'K': 'no label', 'Color': 'no label', 'Shape': 'no label', 'Borders': 'no label', });
lyr_MD_50Km_16.set('fieldLabels', {'fid': 'no label', 'C_PATIENTS': 'no label', 'X': 'no label', 'Y': 'no label', 'C_DOC': 'no label', 'X1': 'no label', 'Y1': 'no label', 'K': 'no label', 'Color': 'no label', 'Shape': 'no label', 'Borders': 'no label', });
lyr_MD1050km_17.set('fieldLabels', {'fid': 'no label', 'C_PATIENTS': 'no label', 'X': 'no label', 'Y': 'no label', 'C_DOC': 'no label', 'X1': 'no label', 'Y1': 'no label', 'K': 'no label', 'Color': 'no label', 'Shape': 'no label', 'Borders': 'no label', });
lyr_MD_10km_18.set('fieldLabels', {'fid': 'no label', 'C_PATIENTS': 'no label', 'X': 'no label', 'Y': 'no label', 'C_DOC': 'no label', 'X1': 'no label', 'Y1': 'no label', 'K': 'no label', 'Color': 'no label', 'Shape': 'no label', 'Borders': 'no label', });
lyr_MD_10km_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});