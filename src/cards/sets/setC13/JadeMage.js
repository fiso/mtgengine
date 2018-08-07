"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JadeMage extends UnimplementedCard {
  constructor (game) {
    super(game, "Jade Mage", "Commander 2013", "C13");
  }
}

module.exports = JadeMage;
