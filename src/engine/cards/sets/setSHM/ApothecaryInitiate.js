"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ApothecaryInitiate extends UnimplementedCard {
  constructor (game) {
    super(game, "Apothecary Initiate", "Shadowmoor", "SHM");
  }
}

module.exports = ApothecaryInitiate;
