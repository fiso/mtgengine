"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AmbitionsCost extends UnimplementedCard {
  constructor (game) {
    super(game, "Ambition's Cost", "Commander 2015", "C15");
  }
}

module.exports = AmbitionsCost;
