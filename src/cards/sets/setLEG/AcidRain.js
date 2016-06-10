"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AcidRain extends UnimplementedCard {
  constructor (game) {
    super(game, "Acid Rain", "Legends", "LEG");
  }
}

module.exports = AcidRain;
