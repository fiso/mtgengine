"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrazzledEditor extends UnimplementedCard {
  constructor (game) {
    super(game, "Frazzled Editor", "Unhinged", "UNH");
  }
}

module.exports = FrazzledEditor;
