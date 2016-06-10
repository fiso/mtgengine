"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MistformSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Mistform Sliver", "Legions", "LGN");
  }
}

module.exports = MistformSliver;
