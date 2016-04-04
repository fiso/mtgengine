"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DuneriderOutlaw extends UnimplementedCard {
  constructor(game) {
    super(game, "Dunerider Outlaw", "Planar Chaos", "PLC");
  }
}

module.exports = DuneriderOutlaw;
