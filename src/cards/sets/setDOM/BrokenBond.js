"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrokenBond extends UnimplementedCard {
  constructor (game) {
    super(game, "Broken Bond", "Dominaria", "DOM");
  }
}

module.exports = BrokenBond;
