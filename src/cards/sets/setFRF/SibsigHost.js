"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SibsigHost extends UnimplementedCard {
  constructor (game) {
    super(game, "Sibsig Host", "Fate Reforged", "FRF");
  }
}

module.exports = SibsigHost;
