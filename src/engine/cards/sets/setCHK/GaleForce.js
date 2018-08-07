"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GaleForce extends UnimplementedCard {
  constructor (game) {
    super(game, "Gale Force", "Champions of Kamigawa", "CHK");
  }
}

module.exports = GaleForce;
