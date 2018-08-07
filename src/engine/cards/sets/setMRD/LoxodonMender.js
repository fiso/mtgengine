"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoxodonMender extends UnimplementedCard {
  constructor (game) {
    super(game, "Loxodon Mender", "Mirrodin", "MRD");
  }
}

module.exports = LoxodonMender;
