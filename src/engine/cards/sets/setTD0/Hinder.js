"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hinder extends UnimplementedCard {
  constructor (game) {
    super(game, "Hinder", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = Hinder;
