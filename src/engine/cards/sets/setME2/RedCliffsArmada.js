"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RedCliffsArmada extends UnimplementedCard {
  constructor (game) {
    super(game, "Red Cliffs Armada", "Masters Edition II", "ME2");
  }
}

module.exports = RedCliffsArmada;
