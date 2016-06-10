"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RunedArch extends UnimplementedCard {
  constructor (game) {
    super(game, "Runed Arch", "Ice Age", "ICE");
  }
}

module.exports = RunedArch;
