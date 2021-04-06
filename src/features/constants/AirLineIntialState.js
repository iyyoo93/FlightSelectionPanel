export const airlineInfo = {
  airCraftInfo: {"ident":"GABCD","type":"A320","economySeats":186,"base":"EGKK"},
  selectedAirLines: [],
  flightList: [],
  rotationList: [],
  availableFlights: [{"ident":"AS1001","departuretime":21600,"arrivaltime":26100,"readable_departure":"06:00","readable_arrival":"07:15","origin":"LFSB","destination":"LFMN"},{"ident":"AS1002","departuretime":27900,"arrivaltime":32100,"readable_departure":"07:45","readable_arrival":"08:55","origin":"LFMN","destination":"LFSB"},{"ident":"AS1025","departuretime":22800,"arrivaltime":28200,"readable_departure":"06:20","readable_arrival":"07:50","origin":"LFSB","destination":"EDDH"},{"ident":"AS1026","departuretime":30000,"arrivaltime":35100,"readable_departure":"08:20","readable_arrival":"09:45","origin":"EDDH","destination":"LFSB"},{"ident":"AS1027","departuretime":35100,"arrivaltime":40500,"readable_departure":"09:45","readable_arrival":"11:15","origin":"LFSB","destination":"EDDH"},{"ident":"AS1028","departuretime":42300,"arrivaltime":47400,"readable_departure":"11:45","readable_arrival":"13:10","origin":"EDDH","destination":"LFSB"},{"ident":"AS1043","departuretime":27900,"arrivaltime":33600,"readable_departure":"07:45","readable_arrival":"09:20","origin":"LFSB","destination":"EHAM"},{"ident":"AS1044","departuretime":21600,"arrivaltime":26100,"readable_departure":"06:00","readable_arrival":"07:15","origin":"EHAM","destination":"LFSB"},{"ident":"AS1057","departuretime":36900,"arrivaltime":43500,"readable_departure":"10:15","readable_arrival":"12:05","origin":"LFSB","destination":"LEPA"},{"ident":"AS1058","departuretime":45600,"arrivaltime":52800,"readable_departure":"12:40","readable_arrival":"14:40","origin":"LEPA","destination":"LFSB"},{"ident":"AS1067","departuretime":21600,"arrivaltime":31200,"readable_departure":"06:00","readable_arrival":"08:40","origin":"LFSB","destination":"LEMG"},{"ident":"AS1068","departuretime":33300,"arrivaltime":42900,"readable_departure":"09:15","readable_arrival":"11:55","origin":"LEMG","destination":"LFSB"},{"ident":"AS1075","departuretime":31800,"arrivaltime":37800,"readable_departure":"08:50","readable_arrival":"10:30","origin":"LFSB","destination":"LEBL"},{"ident":"AS1076","departuretime":22800,"arrivaltime":29700,"readable_departure":"06:20","readable_arrival":"08:15","origin":"LEBL","destination":"LFSB"},{"ident":"AS1081","departuretime":49800,"arrivaltime":55800,"readable_departure":"13:50","readable_arrival":"15:30","origin":"LFSB","destination":"LEBL"},{"ident":"AS1082","departuretime":40800,"arrivaltime":47700,"readable_departure":"11:20","readable_arrival":"13:15","origin":"LEBL","destination":"LFSB"},{"ident":"AS1083","departuretime":36000,"arrivaltime":44100,"readable_departure":"10:00","readable_arrival":"12:15","origin":"LFSB","destination":"LEAL"},{"ident":"AS1084","departuretime":46200,"arrivaltime":54600,"readable_departure":"12:50","readable_arrival":"15:10","origin":"LEAL","destination":"LFSB"},{"ident":"AS11","departuretime":43200,"arrivaltime":47700,"readable_departure":"12:00","readable_arrival":"13:15","origin":"EGGW","destination":"EGPH"},{"ident":"AS1115","departuretime":21600,"arrivaltime":30000,"readable_departure":"06:00","readable_arrival":"08:20","origin":"LFSB","destination":"LEMD"},{"ident":"AS1116","departuretime":32100,"arrivaltime":40200,"readable_departure":"08:55","readable_arrival":"11:10","origin":"LEMD","destination":"LFSB"},{"ident":"AS1125","departuretime":43500,"arrivaltime":49500,"readable_departure":"12:05","readable_arrival":"13:45","origin":"LFSB","destination":"LIRN"},{"ident":"AS1126","departuretime":35100,"arrivaltime":41700,"readable_departure":"09:45","readable_arrival":"11:35","origin":"LIRN","destination":"LFSB"},{"ident":"AS1131","departuretime":36300,"arrivaltime":45600,"readable_departure":"10:05","readable_arrival":"12:40","origin":"LFSB","destination":"LPPR"},{"ident":"AS1132","departuretime":25500,"arrivaltime":34200,"readable_departure":"07:05","readable_arrival":"09:30","origin":"LPPR","destination":"LFSB"},{"ident":"AS1133","departuretime":54300,"arrivaltime":63600,"readable_departure":"15:05","readable_arrival":"17:40","origin":"LFSB","destination":"LPPR"},{"ident":"AS1134","departuretime":43500,"arrivaltime":52200,"readable_departure":"12:05","readable_arrival":"14:30","origin":"LPPR","destination":"LFSB"},{"ident":"AS1139","departuretime":42600,"arrivaltime":59700,"readable_departure":"11:50","readable_arrival":"16:35","origin":"LFSB","destination":"GCLP"},{"ident":"AS1140","departuretime":62100,"arrivaltime":77700,"readable_departure":"17:15","readable_arrival":"21:35","origin":"GCLP","destination":"LFSB"},{"ident":"AS1145","departuretime":57000,"arrivaltime":66300,"readable_departure":"15:50","readable_arrival":"18:25","origin":"LFSB","destination":"ESSA"},{"ident":"AS1146","departuretime":68100,"arrivaltime":77700,"readable_departure":"18:55","readable_arrival":"21:35","origin":"ESSA","destination":"LFSB"},{"ident":"AS1151","departuretime":33600,"arrivaltime":40500,"readable_departure":"09:20","readable_arrival":"11:15","origin":"LFSB","destination":"EKCH"},{"ident":"AS1152","departuretime":42300,"arrivaltime":48600,"readable_departure":"11:45","readable_arrival":"13:30","origin":"EKCH","destination":"LFSB"},{"ident":"AS1153","departuretime":50400,"arrivaltime":60600,"readable_departure":"14:00","readable_arrival":"16:50","origin":"LFSB","destination":"LGAV"},{"ident":"AS1154","departuretime":63000,"arrivaltime":74400,"readable_departure":"17:30","readable_arrival":"20:40","origin":"LGAV","destination":"LFSB"},{"ident":"AS1159","departuretime":51900,"arrivaltime":64500,"readable_departure":"14:25","readable_arrival":"17:55","origin":"LFSB","destination":"GMMX"},{"ident":"AS1160","departuretime":70500,"arrivaltime":83100,"readable_departure":"19:35","readable_arrival":"23:05","origin":"GMMX","destination":"LFSB"},{"ident":"AS1179","departuretime":56100,"arrivaltime":64500,"readable_departure":"15:35","readable_arrival":"17:55","origin":"LFSB","destination":"LEST"},{"ident":"AS1180","departuretime":66600,"arrivaltime":74700,"readable_departure":"18:30","readable_arrival":"20:45","origin":"LEST","destination":"LFSB"},{"ident":"AS1187","departuretime":21000,"arrivaltime":29100,"readable_departure":"05:50","readable_arrival":"08:05","origin":"LFSB","destination":"BKPR"},{"ident":"AS1188","departuretime":31800,"arrivaltime":40200,"readable_departure":"08:50","readable_arrival":"11:10","origin":"BKPR","destination":"LFSB"},{"ident":"AS1197","departuretime":49500,"arrivaltime":62700,"readable_departure":"13:45","readable_arrival":"17:25","origin":"LFSB","destination":"LCLK"},{"ident":"AS1198","departuretime":64800,"arrivaltime":79800,"readable_departure":"18:00","readable_arrival":"22:10","origin":"LCLK","destination":"LFSB"},{"ident":"AS12","departuretime":49500,"arrivaltime":54000,"readable_departure":"13:45","readable_arrival":"15:00","origin":"EGPH","destination":"EGGW"},{"ident":"AS1215","departuretime":36300,"arrivaltime":45600,"readable_departure":"10:05","readable_arrival":"12:40","origin":"LFSB","destination":"LEZL"},{"ident":"AS1216","departuretime":47700,"arrivaltime":57000,"readable_departure":"13:15","readable_arrival":"15:50","origin":"LEZL","destination":"LFSB"},{"ident":"AS1221","departuretime":45300,"arrivaltime":61200,"readable_departure":"12:35","readable_arrival":"17:00","origin":"LFSB","destination":"GCFV"},{"ident":"AS1222","departuretime":63600,"arrivaltime":78900,"readable_departure":"17:40","readable_arrival":"21:55","origin":"GCFV","destination":"LFSB"},{"ident":"AS1225","departuretime":43500,"arrivaltime":60000,"readable_departure":"12:05","readable_arrival":"16:40","origin":"LFSB","destination":"GCTS"},{"ident":"AS1226","departuretime":62400,"arrivaltime":78300,"readable_departure":"17:20","readable_arrival":"21:45","origin":"GCTS","destination":"LFSB"},{"ident":"AS1227","departuretime":40200,"arrivaltime":56400,"readable_departure":"11:10","readable_arrival":"15:40","origin":"LFSB","destination":"GCLA"},{"ident":"AS1228","departuretime":58800,"arrivaltime":74700,"readable_departure":"16:20","readable_arrival":"20:45","origin":"GCLA","destination":"LFSB"},{"ident":"AS1229","departuretime":59700,"arrivaltime":67500,"readable_departure":"16:35","readable_arrival":"18:45","origin":"LFSB","destination":"LICC"},{"ident":"AS1230","departuretime":70200,"arrivaltime":78600,"readable_departure":"19:30","readable_arrival":"21:50","origin":"LICC","destination":"LFSB"},{"ident":"AS1233","departuretime":19200,"arrivaltime":25200,"readable_departure":"05:20","readable_arrival":"07:00","origin":"LFSB","destination":"LHBP"},{"ident":"AS1234","departuretime":27000,"arrivaltime":33300,"readable_departure":"07:30","readable_arrival":"09:15","origin":"LHBP","destination":"LFSB"},{"ident":"AS1249","departuretime":45300,"arrivaltime":60300,"readable_departure":"12:35","readable_arrival":"16:45","origin":"LFSB","destination":"GCRR"},{"ident":"AS1250","departuretime":62700,"arrivaltime":77700,"readable_departure":"17:25","readable_arrival":"21:35","origin":"GCRR","destination":"LFSB"},{"ident":"AS130","departuretime":30000,"arrivaltime":33600,"readable_departure":"08:20","readable_arrival":"09:20","origin":"EGAA","destination":"EGCC"},{"ident":"AS131","departuretime":24900,"arrivaltime":28500,"readable_departure":"06:55","readable_arrival":"07:55","origin":"EGCC","destination":"EGAA"},{"ident":"AS1311","departuretime":49500,"arrivaltime":60900,"readable_departure":"13:45","readable_arrival":"16:55","origin":"LSGG","destination":"GMMX"},{"ident":"AS1312","departuretime":66900,"arrivaltime":78600,"readable_departure":"18:35","readable_arrival":"21:50","origin":"GMMX","destination":"LSGG"},{"ident":"AS132","departuretime":54000,"arrivaltime":57300,"readable_departure":"15:00","readable_arrival":"15:55","origin":"EGAA","destination":"EGCC"},{"ident":"AS1327","departuretime":18600,"arrivaltime":23400,"readable_departure":"05:10","readable_arrival":"06:30","origin":"LSGG","destination":"LIPZ"},{"ident":"AS1328","departuretime":25500,"arrivaltime":30300,"readable_departure":"07:05","readable_arrival":"08:25","origin":"LIPZ","destination":"LSGG"},{"ident":"AS133","departuretime":48900,"arrivaltime":52500,"readable_departure":"13:35","readable_arrival":"14:35","origin":"EGCC","destination":"EGAA"},{"ident":"AS1333","departuretime":46200,"arrivaltime":52500,"readable_departure":"12:50","readable_arrival":"14:35","origin":"LSGG","destination":"LHBP"},{"ident":"AS1334","departuretime":54300,"arrivaltime":61500,"readable_departure":"15:05","readable_arrival":"17:05","origin":"LHBP","destination":"LSGG"},{"ident":"AS1337","departuretime":51000,"arrivaltime":59400,"readable_departure":"14:10","readable_arrival":"16:30","origin":"LSGG","destination":"LEST"},{"ident":"AS1338","departuretime":61500,"arrivaltime":69000,"readable_departure":"17:05","readable_arrival":"19:10","origin":"LEST","destination":"LSGG"},{"ident":"AS1343","departuretime":37800,"arrivaltime":43500,"readable_departure":"10:30","readable_arrival":"12:05","origin":"LSGG","destination":"LIRF"},{"ident":"AS1344","departuretime":45600,"arrivaltime":51300,"readable_departure":"12:40","readable_arrival":"14:15","origin":"LIRF","destination":"LSGG"},{"ident":"AS1345","departuretime":64500,"arrivaltime":70200,"readable_departure":"17:55","readable_arrival":"19:30","origin":"LSGG","destination":"LIRF"},{"ident":"AS1346","departuretime":72300,"arrivaltime":78000,"readable_departure":"20:05","readable_arrival":"21:40","origin":"LIRF","destination":"LSGG"},{"ident":"AS1351","departuretime":30900,"arrivaltime":36900,"readable_departure":"08:35","readable_arrival":"10:15","origin":"LSGG","destination":"EHAM"}]
}
