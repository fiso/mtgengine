"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AkroanHoplite extends UnimplementedCard {
  constructor (game) {
    super(game, "Akroan Hoplite", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = AkroanHoplite;
