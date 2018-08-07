"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FinalParting extends UnimplementedCard {
  constructor (game) {
    super(game, "Final Parting", "Dominaria", "DOM");
  }
}

module.exports = FinalParting;
