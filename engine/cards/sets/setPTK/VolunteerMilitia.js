"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VolunteerMilitiaBase = require("../setPO2/VolunteerMilitia.js");

class VolunteerMilitia extends VolunteerMilitiaBase {
  constructor(game) {
    super(game, "Volunteer Militia", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = VolunteerMilitia;
