"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DoomedNecromancer extends UnimplementedCard {
  constructor(game) {
    super(game, "Doomed Necromancer", "Onslaught", "ONS");
  }
}

module.exports = DoomedNecromancer;
