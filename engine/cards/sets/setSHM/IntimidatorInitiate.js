"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IntimidatorInitiate extends UnimplementedCard {
  constructor(game) {
    super(game, "Intimidator Initiate", "Shadowmoor", "SHM");
  }
}

module.exports = IntimidatorInitiate;
