"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MightWeaver extends UnimplementedCard {
  constructor(game) {
    super(game, "Might Weaver", "Invasion", "INV");
  }
}

module.exports = MightWeaver;
