"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodMist extends UnimplementedCard {
  constructor (game) {
    super(game, "Blood Mist", "Eldritch Moon", "EMN");
  }
}

module.exports = BloodMist;
