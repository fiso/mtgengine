"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolunteerMilitia extends UnimplementedCard {
  constructor(game) {
    super(game, "Volunteer Militia", "Portal Second Age", "PO2");
  }
}

module.exports = VolunteerMilitia;
