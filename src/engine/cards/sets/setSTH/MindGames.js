"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindGames extends UnimplementedCard {
  constructor (game) {
    super(game, "Mind Games", "Stronghold", "STH");
  }
}

module.exports = MindGames;
