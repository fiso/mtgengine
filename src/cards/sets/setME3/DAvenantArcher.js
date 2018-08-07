"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DAvenantArcher extends UnimplementedCard {
  constructor (game) {
    super(game, "D'Avenant Archer", "Masters Edition III", "ME3");
  }
}

module.exports = DAvenantArcher;
