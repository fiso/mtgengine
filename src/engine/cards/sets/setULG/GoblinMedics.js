"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinMedics extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Medics", "Urza's Legacy", "ULG");
  }
}

module.exports = GoblinMedics;
