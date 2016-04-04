"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WaveofTerror extends UnimplementedCard {
  constructor(game) {
    super(game, "Wave of Terror", "Weatherlight", "WTH");
  }
}

module.exports = WaveofTerror;
