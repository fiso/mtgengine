"use strict";
const Constants = require ("../../../Constants");
const VolunteerMilitiaBase = require("../setPO2/VolunteerMilitia");

class VolunteerMilitia extends VolunteerMilitiaBase {
  constructor(game) {
    super(game, "Volunteer Militia", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = VolunteerMilitia;
