"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UrzasTome extends UnimplementedCard {
  constructor (game) {
    super(game, "Urza's Tome", "Dominaria", "DOM");
  }
}

module.exports = UrzasTome;
