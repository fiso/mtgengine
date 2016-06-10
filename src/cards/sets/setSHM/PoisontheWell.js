"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PoisontheWell extends UnimplementedCard {
  constructor (game) {
    super(game, "Poison the Well", "Shadowmoor", "SHM");
  }
}

module.exports = PoisontheWell;
