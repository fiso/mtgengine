"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JoriEnRuinDiver extends UnimplementedCard {
  constructor (game) {
    super(game, "Jori En, Ruin Diver", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = JoriEnRuinDiver;
