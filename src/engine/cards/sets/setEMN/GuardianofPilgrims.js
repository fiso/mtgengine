"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GuardianofPilgrims extends UnimplementedCard {
  constructor (game) {
    super(game, "Guardian of Pilgrims", "Eldritch Moon", "EMN");
  }
}

module.exports = GuardianofPilgrims;
