"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpoilsofEvil extends UnimplementedCard {
  constructor(game) {
    super(game, "Spoils of Evil", "Ice Age", "ICE");
  }
}

module.exports = SpoilsofEvil;
