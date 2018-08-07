"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArterialFlow extends UnimplementedCard {
  constructor (game) {
    super(game, "Arterial Flow", "Rivals of Ixalan", "RIX");
  }
}

module.exports = ArterialFlow;
