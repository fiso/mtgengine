"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WaveofIndifference extends UnimplementedCard {
  constructor(game) {
    super(game, "Wave of Indifference", "Onslaught", "ONS");
  }
}

module.exports = WaveofIndifference;
