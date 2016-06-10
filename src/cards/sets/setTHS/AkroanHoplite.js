"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AkroanHoplite extends UnimplementedCard {
  constructor (game) {
    super(game, "Akroan Hoplite", "Theros", "THS");
  }
}

module.exports = AkroanHoplite;
