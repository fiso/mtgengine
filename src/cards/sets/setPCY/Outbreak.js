"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Outbreak extends UnimplementedCard {
  constructor (game) {
    super(game, "Outbreak", "Prophecy", "PCY");
  }
}

module.exports = Outbreak;
