"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CacklingFiend extends UnimplementedCard {
  constructor(game) {
    super(game, "Cackling Fiend", "Battle Royale Box Set", "BRB");
  }
}

module.exports = CacklingFiend;
