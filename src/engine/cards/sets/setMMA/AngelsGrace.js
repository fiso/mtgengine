"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelsGrace extends UnimplementedCard {
  constructor (game) {
    super(game, "Angel's Grace", "Modern Masters", "MMA");
  }
}

module.exports = AngelsGrace;
