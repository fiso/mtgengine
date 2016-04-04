"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathmistRaptor extends UnimplementedCard {
  constructor(game) {
    super(game, "Deathmist Raptor", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DeathmistRaptor;
