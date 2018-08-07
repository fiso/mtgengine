"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheFirstEruption extends UnimplementedCard {
  constructor (game) {
    super(game, "The First Eruption", "Dominaria", "DOM");
  }
}

module.exports = TheFirstEruption;
