"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class XantchaSleeperAgent extends UnimplementedCard {
  constructor (game) {
    super(game, "Xantcha, Sleeper Agent", "Commander 2018", "C18");
  }
}

module.exports = XantchaSleeperAgent;
