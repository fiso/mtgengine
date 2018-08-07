"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PardicDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Pardic Dragon", "Modern Masters", "MMA");
  }
}

module.exports = PardicDragon;
