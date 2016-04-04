"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HellsparkElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Hellspark Elemental", "Conflux", "CON");
  }
}

module.exports = HellsparkElemental;
