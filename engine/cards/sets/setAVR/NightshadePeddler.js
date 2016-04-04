"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NightshadePeddler extends UnimplementedCard {
  constructor(game) {
    super(game, "Nightshade Peddler", "Avacyn Restored", "AVR");
  }
}

module.exports = NightshadePeddler;
