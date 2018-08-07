"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvenWindGuide extends UnimplementedCard {
  constructor (game) {
    super(game, "Aven Wind Guide", "Amonkhet", "AKH");
  }
}

module.exports = AvenWindGuide;
