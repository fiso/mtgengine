"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NobleHierarch extends UnimplementedCard {
  constructor (game) {
    super(game, "Noble Hierarch", "Conflux", "CON");
  }
}

module.exports = NobleHierarch;
