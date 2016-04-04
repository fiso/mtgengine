"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WestvaleCultLeader extends Card {
  constructor(game) {
    super(game, "Westvale Cult Leader", "Shadows over Innistrad", "SOI");
  }
}

module.exports = WestvaleCultLeader;
