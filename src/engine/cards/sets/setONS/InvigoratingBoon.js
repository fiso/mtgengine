"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InvigoratingBoon extends UnimplementedCard {
  constructor (game) {
    super(game, "Invigorating Boon", "Onslaught", "ONS");
  }
}

module.exports = InvigoratingBoon;
