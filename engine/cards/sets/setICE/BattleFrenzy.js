"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BattleFrenzy extends UnimplementedCard {
  constructor(game) {
    super(game, "Battle Frenzy", "Ice Age", "ICE");
  }
}

module.exports = BattleFrenzy;
