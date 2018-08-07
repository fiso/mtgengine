"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RakkaMar extends UnimplementedCard {
  constructor (game) {
    super(game, "Rakka Mar", "Conflux", "CON");
  }
}

module.exports = RakkaMar;
