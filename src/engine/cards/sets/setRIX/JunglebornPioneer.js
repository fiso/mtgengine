"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JunglebornPioneer extends UnimplementedCard {
  constructor (game) {
    super(game, "Jungleborn Pioneer", "Rivals of Ixalan", "RIX");
  }
}

module.exports = JunglebornPioneer;
