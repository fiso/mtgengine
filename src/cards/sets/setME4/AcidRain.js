"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AcidRain extends UnimplementedCard {
  constructor (game) {
    super(game, "Acid Rain", "Masters Edition IV", "ME4");
  }
}

module.exports = AcidRain;
