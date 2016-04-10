Search.setIndex({envversion:46,filenames:["api/RulesBuilder","api/ValidationException","api/Validator","api/Validator/AbstractComparator","api/Validator/AbstractDateTimeComparator","api/Validator/AbstractFilter","api/Validator/AbstractParametrizedValidator","api/Validator/AfterDateTime","api/Validator/AlphaNumerical","api/Validator/Alphabetical","api/Validator/BeforeDateTime","api/Validator/Between","api/Validator/Boolean","api/Validator/Contains","api/Validator/DateTime","api/Validator/DateTimeBetween","api/Validator/Email","api/Validator/Floating","api/Validator/IP","api/Validator/IPv4","api/Validator/IPv6","api/Validator/InSet","api/Validator/InTheFuture","api/Validator/InThePast","api/Validator/Integer","api/Validator/LengthBetween","api/Validator/Max","api/Validator/MaxLength","api/Validator/Min","api/Validator/MinLength","api/Validator/OlderThan","api/Validator/Regexp","api/Validator/Required","api/Validator/Slug","api/Validator/Url","api/Validator/ValidatorInterface","api/Validator/Value","api/Validator/YoungerThan","api/ValidatorException","index","manual/extendedfeatures","manual/gettingstarted","manual/validators"],objects:{"":{"AbstractComparator::$amountOfParameters":[3,1,1,""],"AbstractComparator::$type":[3,1,1,""],"AbstractComparator::isAllNumeric":[3,0,1,""],"AbstractComparator::isValid":[3,0,1,""],"AbstractComparator::isValidComparison":[3,0,1,""],"AbstractComparator::validateParameterCount":[3,0,1,""],"AbstractDateTimeComparator::$amountOfParameters":[4,1,1,""],"AbstractDateTimeComparator::$dateTimeParameters":[4,1,1,""],"AbstractDateTimeComparator::$type":[4,1,1,""],"AbstractDateTimeComparator::getDateTimeFormat":[4,0,1,""],"AbstractDateTimeComparator::getDateTimes":[4,0,1,""],"AbstractDateTimeComparator::isValid":[4,0,1,""],"AbstractDateTimeComparator::isValidComparison":[4,0,1,""],"AbstractDateTimeComparator::validateParameterCount":[4,0,1,""],"AbstractFilter::getFilter":[5,0,1,""],"AbstractFilter::getFlags":[5,0,1,""],"AbstractFilter::isValid":[5,0,1,""],"AbstractParametrizedValidator::isValid":[6,0,1,""],"AbstractParametrizedValidator::validateParameterCount":[6,0,1,""],"AfterDateTime::$amountOfParameters":[7,1,1,""],"AfterDateTime::$dateTimeParameters":[7,1,1,""],"AfterDateTime::$type":[7,1,1,""],"AfterDateTime::getDateTimeFormat":[7,0,1,""],"AfterDateTime::getDateTimes":[7,0,1,""],"AfterDateTime::isValid":[7,0,1,""],"AfterDateTime::isValidComparison":[7,0,1,""],"AfterDateTime::validateParameterCount":[7,0,1,""],"AlphaNumerical::$amountOfParameters":[8,1,1,""],"AlphaNumerical::$type":[8,1,1,""],"AlphaNumerical::isAllNumeric":[8,0,1,""],"AlphaNumerical::isValid":[8,0,1,""],"AlphaNumerical::isValidComparison":[8,0,1,""],"AlphaNumerical::validateParameterCount":[8,0,1,""],"Alphabetical::$amountOfParameters":[9,1,1,""],"Alphabetical::$type":[9,1,1,""],"Alphabetical::isAllNumeric":[9,0,1,""],"Alphabetical::isValid":[9,0,1,""],"Alphabetical::isValidComparison":[9,0,1,""],"Alphabetical::validateParameterCount":[9,0,1,""],"BeforeDateTime::$amountOfParameters":[10,1,1,""],"BeforeDateTime::$dateTimeParameters":[10,1,1,""],"BeforeDateTime::$type":[10,1,1,""],"BeforeDateTime::getDateTimeFormat":[10,0,1,""],"BeforeDateTime::getDateTimes":[10,0,1,""],"BeforeDateTime::isValid":[10,0,1,""],"BeforeDateTime::isValidComparison":[10,0,1,""],"BeforeDateTime::validateParameterCount":[10,0,1,""],"Between::$amountOfParameters":[11,1,1,""],"Between::$type":[11,1,1,""],"Between::isAllNumeric":[11,0,1,""],"Between::isValid":[11,0,1,""],"Between::isValidComparison":[11,0,1,""],"Between::validateParameterCount":[11,0,1,""],"Boolean::isValid":[12,0,1,""],"Contains::$amountOfParameters":[13,1,1,""],"Contains::$type":[13,1,1,""],"Contains::isAllNumeric":[13,0,1,""],"Contains::isValid":[13,0,1,""],"Contains::isValidComparison":[13,0,1,""],"Contains::validateParameterCount":[13,0,1,""],"DateTime::isValid":[14,0,1,""],"DateTimeBetween::$amountOfParameters":[15,1,1,""],"DateTimeBetween::$dateTimeParameters":[15,1,1,""],"DateTimeBetween::$type":[15,1,1,""],"DateTimeBetween::getDateTimeFormat":[15,0,1,""],"DateTimeBetween::getDateTimes":[15,0,1,""],"DateTimeBetween::isValid":[15,0,1,""],"DateTimeBetween::isValidComparison":[15,0,1,""],"DateTimeBetween::validateParameterCount":[15,0,1,""],"Email::getFilter":[16,0,1,""],"Email::getFlags":[16,0,1,""],"Email::isValid":[16,0,1,""],"Floating::getFilter":[17,0,1,""],"Floating::getFlags":[17,0,1,""],"Floating::isValid":[17,0,1,""],"IP::getFilter":[18,0,1,""],"IP::getFlags":[18,0,1,""],"IP::isValid":[18,0,1,""],"IPv4::getFilter":[19,0,1,""],"IPv4::getFlags":[19,0,1,""],"IPv4::isValid":[19,0,1,""],"IPv6::getFilter":[20,0,1,""],"IPv6::getFlags":[20,0,1,""],"IPv6::isValid":[20,0,1,""],"InSet::isValid":[21,0,1,""],"InTheFuture::$amountOfParameters":[22,1,1,""],"InTheFuture::$dateTimeParameters":[22,1,1,""],"InTheFuture::$type":[22,1,1,""],"InTheFuture::getDateTimeFormat":[22,0,1,""],"InTheFuture::getDateTimes":[22,0,1,""],"InTheFuture::isValid":[22,0,1,""],"InTheFuture::isValidComparison":[22,0,1,""],"InTheFuture::validateParameterCount":[22,0,1,""],"InThePast::$amountOfParameters":[23,1,1,""],"InThePast::$dateTimeParameters":[23,1,1,""],"InThePast::$type":[23,1,1,""],"InThePast::getDateTimeFormat":[23,0,1,""],"InThePast::getDateTimes":[23,0,1,""],"InThePast::isValid":[23,0,1,""],"InThePast::isValidComparison":[23,0,1,""],"InThePast::validateParameterCount":[23,0,1,""],"Integer::getFilter":[24,0,1,""],"Integer::getFlags":[24,0,1,""],"Integer::isValid":[24,0,1,""],"LengthBetween::$amountOfParameters":[25,1,1,""],"LengthBetween::$type":[25,1,1,""],"LengthBetween::isAllNumeric":[25,0,1,""],"LengthBetween::isValid":[25,0,1,""],"LengthBetween::isValidComparison":[25,0,1,""],"LengthBetween::validateParameterCount":[25,0,1,""],"Max::$amountOfParameters":[26,1,1,""],"Max::$type":[26,1,1,""],"Max::isAllNumeric":[26,0,1,""],"Max::isValid":[26,0,1,""],"Max::isValidComparison":[26,0,1,""],"Max::validateParameterCount":[26,0,1,""],"MaxLength::$amountOfParameters":[27,1,1,""],"MaxLength::$type":[27,1,1,""],"MaxLength::isAllNumeric":[27,0,1,""],"MaxLength::isValid":[27,0,1,""],"MaxLength::isValidComparison":[27,0,1,""],"MaxLength::validateParameterCount":[27,0,1,""],"Min::$amountOfParameters":[28,1,1,""],"Min::$type":[28,1,1,""],"Min::isAllNumeric":[28,0,1,""],"Min::isValid":[28,0,1,""],"Min::isValidComparison":[28,0,1,""],"Min::validateParameterCount":[28,0,1,""],"MinLength::$amountOfParameters":[29,1,1,""],"MinLength::$type":[29,1,1,""],"MinLength::isAllNumeric":[29,0,1,""],"MinLength::isValid":[29,0,1,""],"MinLength::isValidComparison":[29,0,1,""],"MinLength::validateParameterCount":[29,0,1,""],"OlderThan::$amountOfParameters":[30,1,1,""],"OlderThan::$dateTimeParameters":[30,1,1,""],"OlderThan::$type":[30,1,1,""],"OlderThan::getDateTimeFormat":[30,0,1,""],"OlderThan::getDateTimes":[30,0,1,""],"OlderThan::isValid":[30,0,1,""],"OlderThan::isValidComparison":[30,0,1,""],"OlderThan::validateParameterCount":[30,0,1,""],"Regexp::$amountOfParameters":[31,1,1,""],"Regexp::$type":[31,1,1,""],"Regexp::isAllNumeric":[31,0,1,""],"Regexp::isValid":[31,0,1,""],"Regexp::isValidComparison":[31,0,1,""],"Regexp::validateParameterCount":[31,0,1,""],"Required::isValid":[32,0,1,""],"RulesBuilder::$rules":[0,1,1,""],"RulesBuilder::__construct":[0,0,1,""],"RulesBuilder::addRule":[0,0,1,""],"RulesBuilder::create":[0,0,1,""],"RulesBuilder::getRules":[0,0,1,""],"Slug::$amountOfParameters":[33,1,1,""],"Slug::$type":[33,1,1,""],"Slug::isAllNumeric":[33,0,1,""],"Slug::isValid":[33,0,1,""],"Slug::isValidComparison":[33,0,1,""],"Slug::validateParameterCount":[33,0,1,""],"Url::getFilter":[34,0,1,""],"Url::getFlags":[34,0,1,""],"Url::isValid":[34,0,1,""],"ValidationException::$code":[1,1,1,""],"ValidationException::$file":[1,1,1,""],"ValidationException::$line":[1,1,1,""],"ValidationException::$message":[1,1,1,""],"ValidationException::__clone":[1,0,1,""],"ValidationException::__construct":[1,0,1,""],"ValidationException::__toString":[1,0,1,""],"ValidationException::__wakeup":[1,0,1,""],"ValidationException::getCode":[1,0,1,""],"ValidationException::getFile":[1,0,1,""],"ValidationException::getLine":[1,0,1,""],"ValidationException::getMessage":[1,0,1,""],"ValidationException::getPrevious":[1,0,1,""],"ValidationException::getTrace":[1,0,1,""],"ValidationException::getTraceAsString":[1,0,1,""],"Validator::$availableValidators":[2,1,1,""],"Validator::__construct":[2,0,1,""],"Validator::addValidator":[2,0,1,""],"Validator::createValidators":[2,0,1,""],"Validator::isValid":[2,0,1,""],"Validator::isValidField":[2,0,1,""],"Validator::isValidRule":[2,0,1,""],"ValidatorException::$code":[38,1,1,""],"ValidatorException::$file":[38,1,1,""],"ValidatorException::$line":[38,1,1,""],"ValidatorException::$message":[38,1,1,""],"ValidatorException::__clone":[38,0,1,""],"ValidatorException::__construct":[38,0,1,""],"ValidatorException::__toString":[38,0,1,""],"ValidatorException::__wakeup":[38,0,1,""],"ValidatorException::getCode":[38,0,1,""],"ValidatorException::getFile":[38,0,1,""],"ValidatorException::getLine":[38,0,1,""],"ValidatorException::getMessage":[38,0,1,""],"ValidatorException::getPrevious":[38,0,1,""],"ValidatorException::getTrace":[38,0,1,""],"ValidatorException::getTraceAsString":[38,0,1,""],"ValidatorInterface::isValid":[35,0,1,""],"Value::$amountOfParameters":[36,1,1,""],"Value::$type":[36,1,1,""],"Value::isAllNumeric":[36,0,1,""],"Value::isValid":[36,0,1,""],"Value::isValidComparison":[36,0,1,""],"Value::validateParameterCount":[36,0,1,""],"YoungerThan::$amountOfParameters":[37,1,1,""],"YoungerThan::$dateTimeParameters":[37,1,1,""],"YoungerThan::$type":[37,1,1,""],"YoungerThan::getDateTimeFormat":[37,0,1,""],"YoungerThan::getDateTimes":[37,0,1,""],"YoungerThan::isValid":[37,0,1,""],"YoungerThan::isValidComparison":[37,0,1,""],"YoungerThan::validateParameterCount":[37,0,1,""],AbstractComparator:[3,2,1,""],AbstractDateTimeComparator:[4,2,1,""],AbstractFilter:[5,2,1,""],AbstractParametrizedValidator:[6,2,1,""],AfterDateTime:[7,2,1,""],AlphaNumerical:[8,2,1,""],Alphabetical:[9,2,1,""],BeforeDateTime:[10,2,1,""],Between:[11,2,1,""],Boolean:[12,2,1,""],Contains:[13,2,1,""],DateTime:[14,2,1,""],DateTimeBetween:[15,2,1,""],Email:[16,2,1,""],Floating:[17,2,1,""],IP:[18,2,1,""],IPv4:[19,2,1,""],IPv6:[20,2,1,""],InSet:[21,2,1,""],InTheFuture:[22,2,1,""],InThePast:[23,2,1,""],Integer:[24,2,1,""],LengthBetween:[25,2,1,""],Max:[26,2,1,""],MaxLength:[27,2,1,""],Min:[28,2,1,""],MinLength:[29,2,1,""],OlderThan:[30,2,1,""],Regexp:[31,2,1,""],Required:[32,2,1,""],RulesBuilder:[0,2,1,""],Slug:[33,2,1,""],Url:[34,2,1,""],ValidationException:[1,2,1,""],Validator:[2,2,1,""],ValidatorException:[38,2,1,""],ValidatorInterface:[35,3,1,""],Value:[36,2,1,""],YoungerThan:[37,2,1,""]}},objnames:{"0":["php","method","PHP method"],"1":["php","attr","PHP attribute"],"2":["php","class","PHP class"],"3":["php","interface","PHP interface"]},objtypes:{"0":"php:method","1":"php:attr","2":"php:class","3":"php:interface"},terms:{"__clone":[1,38],"__construct":[0,1,2,38],"__tostr":[1,38],"__wakeup":[1,38],"_post":41,"abstract":4,"boolean":[2,3,4,6,8,9,11],"case":[40,41,42],"class":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,36,37,38,40,41],"default":[4,7,10,15,22,23,30,37,42],"float":5,"function":[0,5,40,41],"long":41,"new":[0,2,40,41],"null":[5,16,17,18,24,34,40,42],"public":40,"return":[0,2,3,4,5,6,7,8,9,10,11,13,15,16,17,18,22,23,24,25,26,27,28,29,30,31,33,34,35,36,37,40],"throw":[3,4,6,7,8,9,10,11,13,15,22,23,25,26,27,28,29,30,31,33,36,37],"true":[2,3,4,6,8,9,11,13,25,26,27,28,29,31,33,35,36,40,41,42],"while":40,about:41,abov:[2,41],accept:42,actual:2,add:[0,2,40,41],addit:[2,41],address:[16,19,41,42],addrul:[0,41],addvalid:[2,40],adjust:40,advanc:40,after:[7,42],afterdatetim:[4,6],against:41,all:[2,3,8,9,11,13,25,26,27,28,29,31,33,36,40,41,42],alpha:8,alphabet:[3,6],alphanumer:[3,6],amount:[0,3,4,6,7,8,9,10,11,13,15,22,23,25,26,27,28,29,30,31,33,36,37],amountofparamet:[3,4,7,8,9,10,11,13,15,22,23,25,26,27,28,29,30,31,33,36,37],ani:42,api:39,appli:41,arrai:[0,2,4,6,7,10,15,22,23,30,35,37,40,41,42],asd:42,assum:41,avail:[2,41,42],availablevalid:2,back:[40,41],bar:42,base:5,basic:39,befor:[10,42],beforedatetim:[4,6],benefit:40,between:[0,3,6],big:40,bit:40,boundari:42,box:42,build:0,builder:41,call:[0,41],can:[2,4,7,10,15,22,23,30,37,40,41],certain:[30,37],chain:[0,2,41],chapter:[40,41],charact:[33,42],check:[3,8,9,11,13,25,26,27,28,29,31,33,36,40,41],checkbox:42,child:[4,7,10,15,22,23,30,37],classnam:2,code:[1,38,41],compar:[3,4,22,23,30,37,42],comparison:3,compars:42,complet:39,compos:41,condit:42,construct:0,constructor:[0,2],contain:[2,3,6],content:39,conveni:41,could:40,count:[3,4,6,7,8,9,10,11,13,15,22,23,25,26,27,28,29,30,31,33,36,37],cover:[0,40],creat:[0,2,41],createfromformat:[4,7,10,14,15,22,23,30,37],createvalid:2,creation:0,current:[22,23,30,37,42],dash:[33,42],data:[2,39],date:[4,7,10,14,15,22,23,30,37,39],datetim:[4,7,10],datetimebetween:[4,6],datetimeparamet:[4,7,10,15,22,23,30,37],decid:[4,7,10,15,22,23,30,37],depend:[2,39,41],descript:42,deseri:40,directli:41,divid:40,dividebytwo:40,don:[3,4,6,7,8,9,10,11,13,15,22,23,25,26,27,28,29,30,31,33,36,37,40],done:41,due:2,each:[2,35,40],eas:0,easi:39,easili:40,either:[2,41],element:[2,40],els:[6,35,42],email:5,empti:42,end:33,enough:40,equal:[36,42],error:[2,41],even:40,everyon:40,everyth:[41,42],exampl:[0,2,40,41,42],except:[1,3,4,6,7,8,9,10,11,13,15,22,23,25,26,27,28,29,30,31,33,36,37,38],exist:[2,40],expect:[3,4,6,7,8,9,10,11,13,15,22,23,25,26,27,28,29,30,31,33,36,37,38],express:[31,42],extend:39,extens:39,fail:[2,38,40,41],failur:1,fals:[2,6,35,41,42],featur:39,field:[0,2,40,41],fieldrul:2,file:[1,38],filter:[5,16,17,18,24,34],filter_var:5,find:41,first:[2,3,4,40,41,42],flag:[5,16,17,18,24,34],follow:[2,40,42],foo:42,format:[4,7,10,14,15,22,23,30,37,41,42],from:[2,4,7,10,15,22,23,30,37,40,42],fulfil:[41,42],fullfil:[3,4,6,7,8,9,10,11,13,15,22,23,25,26,27,28,29,30,31,33,36,37],futur:22,gener:38,get:[0,4,5,7,10,15,16,17,18,22,23,24,30,34,37,39,40],getcod:[1,38],getdatetim:[4,7,10,15,22,23,30,37],getdatetimeformat:[4,7,10,15,22,23,30,37],getfil:[1,38],getfilt:[5,16,17,18,19,20,24,34],getflag:[5,16,17,18,19,20,24,34],getlin:[1,38],getmessag:[1,38],getprevi:[1,38],getrul:[0,41],gettrac:[1,38],gettraceasstr:[1,38],give:40,given:[2,3,4,6,7,8,9,10,11,13,14,15,22,23,25,26,27,28,29,30,31,33,35,36,37,40,42],handl:42,have:[2,40,41],here:[40,41,42],hold:[0,2,3,4,7,8,9,10,11,13,15,22,23,25,26,27,28,29,30,31,33,36,37],how:[40,41],http:[4,5,7,10,14,15,16,17,18,22,23,24,30,34,37,41],implement:[35,40],in_arrai:40,includ:41,index:39,inheritdoc:[3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,36,37],input:41,instanc:[0,2,40,41],integ:[3,4,5,6,7,8,9,10,11,13,15,22,23],interfac:[35,40],interpret:[4,7,10,15,22,23,30,37],inthefutur:[4,6],inthepast:[4,6],introduc:40,invalid:41,ipv4:5,ipv6:5,isallnumer:[3,8,9,11,13,25,26,27,28,29,31,33,36],isvalid:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,40,41],isvalidcomparison:[3,4,7,8,9,10,11,13,15,22,23,25,26,27,28,29,30,31,33,36,37],isvalidfield:2,isvalidrul:2,json:41,just:[40,41],kei:[2,40,41],last:41,learn:41,length:[25,27,29,42],lengthbetween:[3,6],librari:[39,41],lightweight:39,like:[38,40,41],line:[1,38],list:41,load:2,lower:42,mail:[16,41],manual:[4,5,7,10,14,15,16,17,18,22,23,24,30,34,37,39,40],map:[2,41],max:[3,6],maxim:42,maximum:42,maxlength:[3,6],mean:42,messag:[1,38],method:40,might:[6,35,40,41,42],min:[2,3,6],minim:42,minimum:42,mininum:42,minlength:[3,6],miscellan:39,miss:[38,41],mix:[3,6,35],moment:[22,23,30,37],more:[33,40,41,42],most:42,multipl:41,must:42,myfield:0,name:[2,3,4,6,7,8,9,10,11,13,15,17,22,23,25,26,27,28,29,30,31,33,36,37,40,41,42],namespac:2,need:[6,35,40,42],net:[4,5,7,10,14,15,16,17,18,22,23,24,30,34,37],next:41,note:41,now:[40,41],number:42,numer:[3,8,9,11,13,25,26,27,28,29,31,33,36,39],off:42,older:[30,42],olderthan:[4,6],onli:[40,42],option:[14,41,42],order:0,origin:4,other:[6,35,40],our:40,out:[41,42],output:40,overrid:[2,40,42],own:39,page:39,paramet:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,40,41,42],parameteramount:[3,4,6,7,8,9,10,11,13,15,22,23,25,26,27,28,29,30,31,33,36,37],parametr:6,paramt:[4,7,10,15,22,23,30,37],pars:[4,7,10,15,22,23,30,37],past:23,perform:[2,3],philiplb:41,php7:17,php:[4,5,7,10,14,15,16,17,18,22,23,24,30,34,37,39],point:42,post:41,previou:[1,38],problem:40,properti:[0,1,2,3,4,7,8,9,10,11,13,15,22,23,25,26,27,28,29,30,31,33,36,37,38],protect:[0,1,2,3,4,7,8,9,10,11,13,15,22,23,25,26,27,28,29,30,31,33,36,37,38],pull:40,read:41,reason:39,refer:42,regexp:[3,6],regular:[31,42],request:40,requir:[0,2],reserv:17,result:[2,41],rule:[0,2,39],sampl:2,search:39,second:[30,37,41],see:[4,5,7,10,14,15,16,17,18,22,23,24,30,34,37],send:40,sensit:42,sequenc:33,serial:40,set:[0,2,21,41,42],setup:39,ship:40,should:42,shouldn:40,show:41,shown:[40,41,42],simpl:41,singl:[2,40],slug:[3,6,31],small:40,some:41,somehow:42,someth:[38,41],start:[33,39,40],string:[0,2,3,4,5,6,7,8,9,10,11,13,15,16,17,18,22,23,24,25,26,27,28,29,30,31,33,34,36,37,39],structur:39,style:41,sub:42,substr:13,take:[0,41],term:42,test:39,than:[30,37],them:[4,7,10,15,22,23,30,37,40,41,42],thi:[0,2,39,40,41,42],those:42,time:[4,7,10,14,15,22,23,30,37,39],togeth:2,translat:40,two:[0,40,42],type:[3,4,7,8,9,10,11,13,15,22,23,25,26,27,28,29,30,31,33,36,37],under:0,upper:42,url:5,usag:39,valdivalid:2,valid:1,validateparametercount:[3,4,6,7,8,9,10,11,13,15,22,23,25,26,27,28,29,30,31,33,36,37],validatorinterfac:2,valu:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],variabl:0,veri:39,via:[2,40,41],wai:40,want:40,well:[2,39],went:41,what:41,when:[38,41],where:[2,40],whether:[3,4,7,8,9,10,11,13,15,22,23,25,26,27,28,29,30,31,33,36,37,42],which:[40,42],why:40,within:[1,2,5,16,17,18,24,34,42],without:[0,39],would:40,wrong:41,yet:39,you:[40,41],younger:[37,42],youngerthan:[4,6],your:[40,41],zip:41,zipcod:[40,41]},titles:["RulesBuilder","ValidationException","Validator","Validator\\AbstractComparator","Validator\\AbstractDateTimeComparator","Validator\\AbstractFilter","Validator\\AbstractParametrizedValidator","Validator\\AfterDateTime","Validator\\AlphaNumerical","Validator\\Alphabetical","Validator\\BeforeDateTime","Validator\\Between","Validator\\Boolean","Validator\\Contains","Validator\\DateTime","Validator\\DateTimeBetween","Validator\\Email","Validator\\Floating","Validator\\IP","Validator\\IPv4","Validator\\IPv6","Validator\\InSet","Validator\\InTheFuture","Validator\\InThePast","Validator\\Integer","Validator\\LengthBetween","Validator\\Max","Validator\\MaxLength","Validator\\Min","Validator\\MinLength","Validator\\OlderThan","Validator\\Regexp","Validator\\Required","Validator\\Slug","Validator\\Url","Validator\\ValidatorInterface","Validator\\Value","Validator\\YoungerThan","ValidatorException","Welcome to Valdi&#8217;s documentation!","Extended Features","Getting Started","Validators"],titleterms:{"boolean":[12,42],"float":[17,42],abstractcompar:3,abstractdatetimecompar:4,abstractfilt:5,abstractparametrizedvalid:6,afterdatetim:[7,42],alphabet:[9,42],alphanumer:[8,42],basic:42,beforedatetim:[10,42],between:[11,42],contain:[13,42],data:40,date:42,datetim:[14,42],datetimebetween:[15,42],document:39,email:[16,42],extend:40,featur:40,get:41,indic:39,inset:[21,42],integ:[24,42],inthefutur:[22,42],inthepast:[23,42],ipv4:[19,42],ipv6:[20,42],lengthbetween:[25,42],max:[26,42],maxlength:[27,42],min:[28,42],minlength:[29,42],miscellan:42,numer:42,olderthan:[30,42],own:40,regexp:[31,42],requir:[32,42],rule:[40,41],rulesbuild:0,setup:41,slug:[33,42],start:41,string:42,structur:40,tabl:39,time:42,url:[34,42],usag:41,valdi:39,valid:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,41,42],validationexcept:1,validatorexcept:38,validatorinterfac:35,valu:[36,42],welcom:39,youngerthan:[37,42]}})