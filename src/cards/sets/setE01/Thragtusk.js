"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Thragtusk extends UnimplementedCard {
  constructor (game) {
    super(game, "Thragtusk", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = Thragtusk;
