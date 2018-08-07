"use strict";
const Constants = require ("../../../Constants");
const VolunteerMilitiaBase = require("../setPTK/VolunteerMilitia");

class VolunteerMilitia extends VolunteerMilitiaBase {
  constructor (game) {
    super(game, "Volunteer Militia", "Portal Second Age", "P02");
  }
}

module.exports = VolunteerMilitia;
