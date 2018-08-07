"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MasterofEtherium extends UnimplementedCard {
  constructor (game) {
    super(game, "Master of Etherium", "Commander 2016", "C16");
  }
}

module.exports = MasterofEtherium;
