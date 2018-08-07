"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Excise extends UnimplementedCard {
  constructor (game) {
    super(game, "Excise", "Prophecy", "PCY");
  }
}

module.exports = Excise;
