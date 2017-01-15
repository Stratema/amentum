// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('amentum.docs.data');
goog.require('cljs.core');
goog.require('clojure.string');
amentum.docs.data.countries = cljs.core.PersistentVector.fromArray([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Afghanistan",cljs.core.cst$kw$code,"AF"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"\u00C5land Islands",cljs.core.cst$kw$code,"AX"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Albania",cljs.core.cst$kw$code,"AL"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Algeria",cljs.core.cst$kw$code,"DZ"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"American Samoa",cljs.core.cst$kw$code,"AS"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Andorra",cljs.core.cst$kw$code,"AD"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Angola",cljs.core.cst$kw$code,"AO"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Anguilla",cljs.core.cst$kw$code,"AI"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Antarctica",cljs.core.cst$kw$code,"AQ"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Antigua and Barbuda",cljs.core.cst$kw$code,"AG"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Argentina",cljs.core.cst$kw$code,"AR"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Armenia",cljs.core.cst$kw$code,"AM"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Aruba",cljs.core.cst$kw$code,"AW"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Australia",cljs.core.cst$kw$code,"AU"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Austria",cljs.core.cst$kw$code,"AT"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Azerbaijan",cljs.core.cst$kw$code,"AZ"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Bahamas",cljs.core.cst$kw$code,"BS"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Bahrain",cljs.core.cst$kw$code,"BH"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Bangladesh",cljs.core.cst$kw$code,"BD"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Barbados",cljs.core.cst$kw$code,"BB"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Belarus",cljs.core.cst$kw$code,"BY"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Belgium",cljs.core.cst$kw$code,"BE"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Belize",cljs.core.cst$kw$code,"BZ"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Benin",cljs.core.cst$kw$code,"BJ"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Bermuda",cljs.core.cst$kw$code,"BM"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Bhutan",cljs.core.cst$kw$code,"BT"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Bolivia, Plurinational State of",cljs.core.cst$kw$code,"BO"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Bonaire, Sint Eustatius and Saba",cljs.core.cst$kw$code,"BQ"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Bosnia and Herzegovina",cljs.core.cst$kw$code,"BA"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Botswana",cljs.core.cst$kw$code,"BW"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Bouvet Island",cljs.core.cst$kw$code,"BV"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Brazil",cljs.core.cst$kw$code,"BR"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"British Indian Ocean Territory",cljs.core.cst$kw$code,"IO"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Brunei Darussalam",cljs.core.cst$kw$code,"BN"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Bulgaria",cljs.core.cst$kw$code,"BG"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Burkina Faso",cljs.core.cst$kw$code,"BF"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Burundi",cljs.core.cst$kw$code,"BI"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Cambodia",cljs.core.cst$kw$code,"KH"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Cameroon",cljs.core.cst$kw$code,"CM"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Canada",cljs.core.cst$kw$code,"CA"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Cape Verde",cljs.core.cst$kw$code,"CV"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Cayman Islands",cljs.core.cst$kw$code,"KY"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Central African Republic",cljs.core.cst$kw$code,"CF"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Chad",cljs.core.cst$kw$code,"TD"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Chile",cljs.core.cst$kw$code,"CL"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"China",cljs.core.cst$kw$code,"CN"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Christmas Island",cljs.core.cst$kw$code,"CX"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Cocos (Keeling) Islands",cljs.core.cst$kw$code,"CC"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Colombia",cljs.core.cst$kw$code,"CO"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Comoros",cljs.core.cst$kw$code,"KM"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Congo",cljs.core.cst$kw$code,"CG"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Congo, the Democratic Republic of the",cljs.core.cst$kw$code,"CD"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Cook Islands",cljs.core.cst$kw$code,"CK"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Costa Rica",cljs.core.cst$kw$code,"CR"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"C\u00F4te d'Ivoire",cljs.core.cst$kw$code,"CI"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Croatia",cljs.core.cst$kw$code,"HR"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Cuba",cljs.core.cst$kw$code,"CU"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Cura\u00E7ao",cljs.core.cst$kw$code,"CW"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Cyprus",cljs.core.cst$kw$code,"CY"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Czech Republic",cljs.core.cst$kw$code,"CZ"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Denmark",cljs.core.cst$kw$code,"DK"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Djibouti",cljs.core.cst$kw$code,"DJ"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Dominica",cljs.core.cst$kw$code,"DM"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Dominican Republic",cljs.core.cst$kw$code,"DO"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Ecuador",cljs.core.cst$kw$code,"EC"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Egypt",cljs.core.cst$kw$code,"EG"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"El Salvador",cljs.core.cst$kw$code,"SV"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Equatorial Guinea",cljs.core.cst$kw$code,"GQ"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Eritrea",cljs.core.cst$kw$code,"ER"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Estonia",cljs.core.cst$kw$code,"EE"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Ethiopia",cljs.core.cst$kw$code,"ET"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Falkland Islands (Malvinas)",cljs.core.cst$kw$code,"FK"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Faroe Islands",cljs.core.cst$kw$code,"FO"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Fiji",cljs.core.cst$kw$code,"FJ"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Finland",cljs.core.cst$kw$code,"FI"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"France",cljs.core.cst$kw$code,"FR"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"French Guiana",cljs.core.cst$kw$code,"GF"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"French Polynesia",cljs.core.cst$kw$code,"PF"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"French Southern Territories",cljs.core.cst$kw$code,"TF"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Gabon",cljs.core.cst$kw$code,"GA"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Gambia",cljs.core.cst$kw$code,"GM"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Georgia",cljs.core.cst$kw$code,"GE"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Germany",cljs.core.cst$kw$code,"DE"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Ghana",cljs.core.cst$kw$code,"GH"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Gibraltar",cljs.core.cst$kw$code,"GI"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Greece",cljs.core.cst$kw$code,"GR"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Greenland",cljs.core.cst$kw$code,"GL"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Grenada",cljs.core.cst$kw$code,"GD"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Guadeloupe",cljs.core.cst$kw$code,"GP"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Guam",cljs.core.cst$kw$code,"GU"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Guatemala",cljs.core.cst$kw$code,"GT"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Guernsey",cljs.core.cst$kw$code,"GG"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Guinea",cljs.core.cst$kw$code,"GN"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Guinea-Bissau",cljs.core.cst$kw$code,"GW"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Guyana",cljs.core.cst$kw$code,"GY"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Haiti",cljs.core.cst$kw$code,"HT"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Heard Island and McDonald Islands",cljs.core.cst$kw$code,"HM"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Holy See (Vatican City State)",cljs.core.cst$kw$code,"VA"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Honduras",cljs.core.cst$kw$code,"HN"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Hong Kong",cljs.core.cst$kw$code,"HK"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Hungary",cljs.core.cst$kw$code,"HU"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Iceland",cljs.core.cst$kw$code,"IS"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"India",cljs.core.cst$kw$code,"IN"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Indonesia",cljs.core.cst$kw$code,"ID"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Iran, Islamic Republic of",cljs.core.cst$kw$code,"IR"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Iraq",cljs.core.cst$kw$code,"IQ"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Ireland",cljs.core.cst$kw$code,"IE"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Isle of Man",cljs.core.cst$kw$code,"IM"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Israel",cljs.core.cst$kw$code,"IL"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Italy",cljs.core.cst$kw$code,"IT"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Jamaica",cljs.core.cst$kw$code,"JM"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Japan",cljs.core.cst$kw$code,"JP"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Jersey",cljs.core.cst$kw$code,"JE"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Jordan",cljs.core.cst$kw$code,"JO"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Kazakhstan",cljs.core.cst$kw$code,"KZ"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Kenya",cljs.core.cst$kw$code,"KE"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Kiribati",cljs.core.cst$kw$code,"KI"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Korea, Democratic People's Republic of",cljs.core.cst$kw$code,"KP"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Korea, Republic of",cljs.core.cst$kw$code,"KR"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Kuwait",cljs.core.cst$kw$code,"KW"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Kyrgyzstan",cljs.core.cst$kw$code,"KG"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Lao People's Democratic Republic",cljs.core.cst$kw$code,"LA"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Latvia",cljs.core.cst$kw$code,"LV"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Lebanon",cljs.core.cst$kw$code,"LB"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Lesotho",cljs.core.cst$kw$code,"LS"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Liberia",cljs.core.cst$kw$code,"LR"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Libya",cljs.core.cst$kw$code,"LY"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Liechtenstein",cljs.core.cst$kw$code,"LI"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Lithuania",cljs.core.cst$kw$code,"LT"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Luxembourg",cljs.core.cst$kw$code,"LU"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Macao",cljs.core.cst$kw$code,"MO"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Macedonia, the Former Yugoslav Republic of",cljs.core.cst$kw$code,"MK"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Madagascar",cljs.core.cst$kw$code,"MG"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Malawi",cljs.core.cst$kw$code,"MW"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Malaysia",cljs.core.cst$kw$code,"MY"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Maldives",cljs.core.cst$kw$code,"MV"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Mali",cljs.core.cst$kw$code,"ML"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Malta",cljs.core.cst$kw$code,"MT"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Marshall Islands",cljs.core.cst$kw$code,"MH"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Martinique",cljs.core.cst$kw$code,"MQ"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Mauritania",cljs.core.cst$kw$code,"MR"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Mauritius",cljs.core.cst$kw$code,"MU"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Mayotte",cljs.core.cst$kw$code,"YT"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Mexico",cljs.core.cst$kw$code,"MX"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Micronesia, Federated States of",cljs.core.cst$kw$code,"FM"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Moldova, Republic of",cljs.core.cst$kw$code,"MD"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Monaco",cljs.core.cst$kw$code,"MC"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Mongolia",cljs.core.cst$kw$code,"MN"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Montenegro",cljs.core.cst$kw$code,"ME"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Montserrat",cljs.core.cst$kw$code,"MS"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Morocco",cljs.core.cst$kw$code,"MA"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Mozambique",cljs.core.cst$kw$code,"MZ"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Myanmar",cljs.core.cst$kw$code,"MM"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Namibia",cljs.core.cst$kw$code,"NA"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Nauru",cljs.core.cst$kw$code,"NR"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Nepal",cljs.core.cst$kw$code,"NP"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Netherlands",cljs.core.cst$kw$code,"NL"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"New Caledonia",cljs.core.cst$kw$code,"NC"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"New Zealand",cljs.core.cst$kw$code,"NZ"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Nicaragua",cljs.core.cst$kw$code,"NI"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Niger",cljs.core.cst$kw$code,"NE"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Nigeria",cljs.core.cst$kw$code,"NG"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Niue",cljs.core.cst$kw$code,"NU"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Norfolk Island",cljs.core.cst$kw$code,"NF"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Northern Mariana Islands",cljs.core.cst$kw$code,"MP"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Norway",cljs.core.cst$kw$code,"NO"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Oman",cljs.core.cst$kw$code,"OM"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Pakistan",cljs.core.cst$kw$code,"PK"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Palau",cljs.core.cst$kw$code,"PW"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Palestine, State of",cljs.core.cst$kw$code,"PS"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Panama",cljs.core.cst$kw$code,"PA"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Papua New Guinea",cljs.core.cst$kw$code,"PG"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Paraguay",cljs.core.cst$kw$code,"PY"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Peru",cljs.core.cst$kw$code,"PE"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Philippines",cljs.core.cst$kw$code,"PH"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Pitcairn",cljs.core.cst$kw$code,"PN"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Poland",cljs.core.cst$kw$code,"PL"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Portugal",cljs.core.cst$kw$code,"PT"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Puerto Rico",cljs.core.cst$kw$code,"PR"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Qatar",cljs.core.cst$kw$code,"QA"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"R\u00E9union",cljs.core.cst$kw$code,"RE"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Romania",cljs.core.cst$kw$code,"RO"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Russian Federation",cljs.core.cst$kw$code,"RU"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Rwanda",cljs.core.cst$kw$code,"RW"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Saint Barth\u00E9lemy",cljs.core.cst$kw$code,"BL"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Saint Helena, Ascension and Tristan da Cunha",cljs.core.cst$kw$code,"SH"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Saint Kitts and Nevis",cljs.core.cst$kw$code,"KN"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Saint Lucia",cljs.core.cst$kw$code,"LC"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Saint Martin (French part)",cljs.core.cst$kw$code,"MF"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Saint Pierre and Miquelon",cljs.core.cst$kw$code,"PM"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Saint Vincent and the Grenadines",cljs.core.cst$kw$code,"VC"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Samoa",cljs.core.cst$kw$code,"WS"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"San Marino",cljs.core.cst$kw$code,"SM"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Sao Tome and Principe",cljs.core.cst$kw$code,"ST"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Saudi Arabia",cljs.core.cst$kw$code,"SA"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Senegal",cljs.core.cst$kw$code,"SN"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Serbia",cljs.core.cst$kw$code,"RS"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Seychelles",cljs.core.cst$kw$code,"SC"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Sierra Leone",cljs.core.cst$kw$code,"SL"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Singapore",cljs.core.cst$kw$code,"SG"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Sint Maarten (Dutch part)",cljs.core.cst$kw$code,"SX"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Slovakia",cljs.core.cst$kw$code,"SK"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Slovenia",cljs.core.cst$kw$code,"SI"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Solomon Islands",cljs.core.cst$kw$code,"SB"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Somalia",cljs.core.cst$kw$code,"SO"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"South Africa",cljs.core.cst$kw$code,"ZA"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"South Georgia and the South Sandwich Islands",cljs.core.cst$kw$code,"GS"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"South Sudan",cljs.core.cst$kw$code,"SS"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Spain",cljs.core.cst$kw$code,"ES"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Sri Lanka",cljs.core.cst$kw$code,"LK"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Sudan",cljs.core.cst$kw$code,"SD"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Suriname",cljs.core.cst$kw$code,"SR"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Svalbard and Jan Mayen",cljs.core.cst$kw$code,"SJ"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Swaziland",cljs.core.cst$kw$code,"SZ"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Sweden",cljs.core.cst$kw$code,"SE"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Switzerland",cljs.core.cst$kw$code,"CH"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Syrian Arab Republic",cljs.core.cst$kw$code,"SY"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Taiwan, Province of China",cljs.core.cst$kw$code,"TW"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Tajikistan",cljs.core.cst$kw$code,"TJ"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Tanzania, United Republic of",cljs.core.cst$kw$code,"TZ"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Thailand",cljs.core.cst$kw$code,"TH"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Timor-Leste",cljs.core.cst$kw$code,"TL"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Togo",cljs.core.cst$kw$code,"TG"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Tokelau",cljs.core.cst$kw$code,"TK"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Tonga",cljs.core.cst$kw$code,"TO"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Trinidad and Tobago",cljs.core.cst$kw$code,"TT"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Tunisia",cljs.core.cst$kw$code,"TN"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Turkey",cljs.core.cst$kw$code,"TR"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Turkmenistan",cljs.core.cst$kw$code,"TM"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Turks and Caicos Islands",cljs.core.cst$kw$code,"TC"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Tuvalu",cljs.core.cst$kw$code,"TV"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Uganda",cljs.core.cst$kw$code,"UG"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Ukraine",cljs.core.cst$kw$code,"UA"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"United Arab Emirates",cljs.core.cst$kw$code,"AE"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"United Kingdom",cljs.core.cst$kw$code,"GB"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"United States",cljs.core.cst$kw$code,"US"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"United States Minor Outlying Islands",cljs.core.cst$kw$code,"UM"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Uruguay",cljs.core.cst$kw$code,"UY"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Uzbekistan",cljs.core.cst$kw$code,"UZ"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Vanuatu",cljs.core.cst$kw$code,"VU"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Venezuela, Bolivarian Republic of",cljs.core.cst$kw$code,"VE"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Viet Nam",cljs.core.cst$kw$code,"VN"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Virgin Islands, British",cljs.core.cst$kw$code,"VG"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Virgin Islands, U.S.",cljs.core.cst$kw$code,"VI"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Wallis and Futuna",cljs.core.cst$kw$code,"WF"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Western Sahara",cljs.core.cst$kw$code,"EH"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Yemen",cljs.core.cst$kw$code,"YE"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Zambia",cljs.core.cst$kw$code,"ZM"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Zimbabwe",cljs.core.cst$kw$code,"ZW"], null)], true);
amentum.docs.data.countries_nv = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14914_SHARP_){
var lc = clojure.string.lower_case(cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(p1__14914_SHARP_));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__14914_SHARP_,cljs.core.cst$kw$value,lc,cljs.core.array_seq([cljs.core.cst$kw$icon,[cljs.core.str(lc),cljs.core.str(" flag")].join('')], 0));
}),amentum.docs.data.countries);
amentum.docs.data.numbers = cljs.core.PersistentHashMap.fromArrays([(7),(1),(4),(15),(13),(6),(3),(12),(2),(11),(9),(5),(14),(16),(10),(8)],["seven","one","four","fifteen","thirteen","six","three","twelve","two","eleven","nine","five","fourteen","sixteen","ten","eight"]);
amentum.docs.data.numbers_nv = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14920_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$value,cljs.core.cst$kw$name],[p1__14920_SHARP_,(amentum.docs.data.numbers.cljs$core$IFn$_invoke$arity$1 ? amentum.docs.data.numbers.cljs$core$IFn$_invoke$arity$1(p1__14920_SHARP_) : amentum.docs.data.numbers.call(null,p1__14920_SHARP_))]);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(17)));
amentum.docs.data.genders = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Male",cljs.core.cst$kw$value,(1)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"Female",cljs.core.cst$kw$value,(0)], null)], null);