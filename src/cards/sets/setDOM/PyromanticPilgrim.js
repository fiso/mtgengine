"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PyromanticPilgrim extends UnimplementedCard {
  constructor (game) {
    super(game, "Pyromantic Pilgrim", "Dominaria", "DOM");
  }
}

module.exports = PyromanticPilgrim;
