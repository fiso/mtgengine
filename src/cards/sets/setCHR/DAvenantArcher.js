"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DAvenantArcher extends UnimplementedCard {
  constructor (game) {
    super(game, "D'Avenant Archer", "Chronicles", "CHR");
  }
}

module.exports = DAvenantArcher;
