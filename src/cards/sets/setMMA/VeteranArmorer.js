"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VeteranArmorer extends UnimplementedCard {
  constructor (game) {
    super(game, "Veteran Armorer", "Modern Masters", "MMA");
  }
}

module.exports = VeteranArmorer;
