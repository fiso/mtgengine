"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SulfurFalls extends UnimplementedCard {
  constructor (game) {
    super(game, "Sulfur Falls", "Dominaria", "DOM");
  }
}

module.exports = SulfurFalls;
