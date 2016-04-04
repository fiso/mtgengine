"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VolunteerMilitia extends Card {
  constructor(game) {
    super(game, "Volunteer Militia", "Portal Second Age", "PO2");
  }
}

module.exports = VolunteerMilitia;
