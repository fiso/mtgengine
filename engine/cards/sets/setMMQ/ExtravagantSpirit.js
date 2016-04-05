"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExtravagantSpirit extends UnimplementedCard {
  constructor(game) {
    super(game, "Extravagant Spirit", "Mercadian Masques", "MMQ");
  }
}

module.exports = ExtravagantSpirit;
