"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolunteerReserves extends UnimplementedCard {
  constructor(game) {
    super(game, "Volunteer Reserves", "Weatherlight", "WTH");
  }
}

module.exports = VolunteerReserves;
