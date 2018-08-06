"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteadfastCathar extends UnimplementedCard {
  constructor (game) {
    super(game, "Steadfast Cathar", "Eldritch Moon", "EMN");
  }
}

module.exports = SteadfastCathar;
