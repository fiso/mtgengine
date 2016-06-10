"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AshenMonstrosity extends UnimplementedCard {
  constructor (game) {
    super(game, "Ashen Monstrosity", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = AshenMonstrosity;
