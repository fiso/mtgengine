"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Unwind extends UnimplementedCard {
  constructor (game) {
    super(game, "Unwind", "Dominaria", "DOM");
  }
}

module.exports = Unwind;
