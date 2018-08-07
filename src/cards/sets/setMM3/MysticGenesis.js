"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MysticGenesis extends UnimplementedCard {
  constructor (game) {
    super(game, "Mystic Genesis", "Modern Masters 2017", "MM3");
  }
}

module.exports = MysticGenesis;
