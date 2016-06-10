"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SulfurFalls extends UnimplementedCard {
  constructor (game) {
    super(game, "Sulfur Falls", "Innistrad", "ISD");
  }
}

module.exports = SulfurFalls;
