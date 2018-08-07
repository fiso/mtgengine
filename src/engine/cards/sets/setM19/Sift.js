"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sift extends UnimplementedCard {
  constructor (game) {
    super(game, "Sift", "Core Set 2019", "M19");
  }
}

module.exports = Sift;
