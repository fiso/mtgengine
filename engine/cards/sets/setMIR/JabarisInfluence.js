"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JabarisInfluence extends UnimplementedCard {
  constructor(game) {
    super(game, "Jabari's Influence", "Mirage", "MIR");
  }
}

module.exports = JabarisInfluence;
