"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaddeningWind extends UnimplementedCard {
  constructor (game) {
    super(game, "Maddening Wind", "Ice Age", "ICE");
  }
}

module.exports = MaddeningWind;
