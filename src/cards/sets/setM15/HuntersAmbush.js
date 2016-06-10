"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HuntersAmbush extends UnimplementedCard {
  constructor (game) {
    super(game, "Hunter's Ambush", "Magic 2015 Core Set", "M15");
  }
}

module.exports = HuntersAmbush;
