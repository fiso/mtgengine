"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WaveofVitriol extends UnimplementedCard {
  constructor (game) {
    super(game, "Wave of Vitriol", "Commander Anthology", "CMA");
  }
}

module.exports = WaveofVitriol;
