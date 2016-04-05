"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpitefulBlow extends UnimplementedCard {
  constructor(game) {
    super(game, "Spiteful Blow", "Journey into Nyx", "JOU");
  }
}

module.exports = SpitefulBlow;
