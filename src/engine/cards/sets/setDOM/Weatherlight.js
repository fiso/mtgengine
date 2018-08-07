"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Weatherlight extends UnimplementedCard {
  constructor (game) {
    super(game, "Weatherlight", "Dominaria", "DOM");
  }
}

module.exports = Weatherlight;
