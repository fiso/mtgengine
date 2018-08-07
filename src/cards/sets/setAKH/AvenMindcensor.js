"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvenMindcensor extends UnimplementedCard {
  constructor (game) {
    super(game, "Aven Mindcensor", "Amonkhet", "AKH");
  }
}

module.exports = AvenMindcensor;
