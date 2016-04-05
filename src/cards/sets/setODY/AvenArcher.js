"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvenArcher extends UnimplementedCard {
  constructor(game) {
    super(game, "Aven Archer", "Odyssey", "ODY");
  }
}

module.exports = AvenArcher;
