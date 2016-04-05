"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VugLizard extends UnimplementedCard {
  constructor(game) {
    super(game, "Vug Lizard", "Urza's Saga", "USG");
  }
}

module.exports = VugLizard;
