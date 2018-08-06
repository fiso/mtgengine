"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThaliasLancers extends UnimplementedCard {
  constructor (game) {
    super(game, "Thalia's Lancers", "Eldritch Moon", "EMN");
  }
}

module.exports = ThaliasLancers;
