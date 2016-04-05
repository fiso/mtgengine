"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoneRevenant extends UnimplementedCard {
  constructor(game) {
    super(game, "Lone Revenant", "Avacyn Restored", "AVR");
  }
}

module.exports = LoneRevenant;
