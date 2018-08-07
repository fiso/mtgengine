"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindSwords extends UnimplementedCard {
  constructor (game) {
    super(game, "Mind Swords", "Nemesis", "NEM");
  }
}

module.exports = MindSwords;
