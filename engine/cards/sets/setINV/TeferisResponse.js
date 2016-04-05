"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TeferisResponse extends UnimplementedCard {
  constructor(game) {
    super(game, "Teferi's Response", "Invasion", "INV");
  }
}

module.exports = TeferisResponse;
