"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ViridianScout extends UnimplementedCard {
  constructor (game) {
    super(game, "Viridian Scout", "Fifth Dawn", "5DN");
  }
}

module.exports = ViridianScout;
