"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VolunteerReserves extends Card {
  constructor(game) {
    super(game, "Volunteer Reserves", "Weatherlight", "WTH");
  }
}

module.exports = VolunteerReserves;
