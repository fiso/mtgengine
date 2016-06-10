"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MisfortunesGain extends UnimplementedCard {
  constructor (game) {
    super(game, "Misfortune's Gain", "Masters Edition III", "ME3");
  }
}

module.exports = MisfortunesGain;
