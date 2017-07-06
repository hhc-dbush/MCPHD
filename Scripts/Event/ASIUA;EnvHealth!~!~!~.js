// ASIUA;EnvHealth!~!~!~ 

//if (capName == '') {
	//replaced branch(ES_GET_ADDRESS)
	//ES_GET_ADDRESS();
//}

if (matches(appTypeArray[1],'EHSM','HHECMSC','HOUSING') && currentUserID == "RVOLLER") { //verified user setup :)
	//var newUserID = lookup("Census - Housing EHS",AInfo['ParcelAttribute.CensusTract']);
	var newUserID = lookup("Census - Housing EHS",AInfo['GENERAL.Census Tract']);
	if (checkInspectionResult("Initial Inspection", "Scheduled") == true) { inspNum=getScheduledInspId("Initial Inspection"); }
	if (checkInspectionResult("Reinspection", "Scheduled") == true) { inspNum=getScheduledInspId("Reinspection"); }
	editAppSpecific("GENERAL.Assigned To", newUserID);
	assignCap(newUserID);
	if (checkInspectionResult("Initial Inspection", "Scheduled")) { assignInspection(inspNum, newUserID); }
	if (checkInspectionResult("Reinspection", "Scheduled")) { assignInspection(inspNum, newUserID); }
	if (matches(AInfo['GENERAL.CensusTract'],null,"","undefined")) { editAppSpecific("GENERAL.Census Tract", AInfo['ParcelAttribute.CensusTract']); }

}
