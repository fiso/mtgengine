"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AnvilofBogardan extends UnimplementedCard {
  constructor (game) {
    super(game, "Anvil of Bogardan", "Visions", "VIS");
  }
}

module.exports = AnvilofBogardan;
