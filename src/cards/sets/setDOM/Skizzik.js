"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Skizzik extends UnimplementedCard {
  constructor (game) {
    super(game, "Skizzik", "Dominaria", "DOM");
  }
}

module.exports = Skizzik;
