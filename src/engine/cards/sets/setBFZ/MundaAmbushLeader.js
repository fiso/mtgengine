"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MundaAmbushLeader extends UnimplementedCard {
  constructor (game) {
    super(game, "Munda, Ambush Leader", "Battle for Zendikar", "BFZ");
  }
}

module.exports = MundaAmbushLeader;
