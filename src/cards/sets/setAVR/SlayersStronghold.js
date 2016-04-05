"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlayersStronghold extends UnimplementedCard {
  constructor(game) {
    super(game, "Slayers' Stronghold", "Avacyn Restored", "AVR");
  }
}

module.exports = SlayersStronghold;
