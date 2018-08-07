"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DAvenantTrapper extends UnimplementedCard {
  constructor (game) {
    super(game, "D'Avenant Trapper", "Dominaria", "DOM");
  }
}

module.exports = DAvenantTrapper;
