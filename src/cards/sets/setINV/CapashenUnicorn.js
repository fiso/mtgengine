"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CapashenUnicorn extends UnimplementedCard {
  constructor (game) {
    super(game, "Capashen Unicorn", "Invasion", "INV");
  }
}

module.exports = CapashenUnicorn;
