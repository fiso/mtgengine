"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DivinerSpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Diviner Spirit", "Commander Anthology", "CMA");
  }
}

module.exports = DivinerSpirit;
