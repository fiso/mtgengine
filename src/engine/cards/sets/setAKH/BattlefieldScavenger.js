"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BattlefieldScavenger extends UnimplementedCard {
  constructor (game) {
    super(game, "Battlefield Scavenger", "Amonkhet", "AKH");
  }
}

module.exports = BattlefieldScavenger;
