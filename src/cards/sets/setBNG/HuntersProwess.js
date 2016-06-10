"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HuntersProwess extends UnimplementedCard {
  constructor (game) {
    super(game, "Hunter's Prowess", "Born of the Gods", "BNG");
  }
}

module.exports = HuntersProwess;
