"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoxodonMystic extends UnimplementedCard {
  constructor(game) {
    super(game, "Loxodon Mystic", "Darksteel", "DST");
  }
}

module.exports = LoxodonMystic;
