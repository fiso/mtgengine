"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WestvaleCultLeader extends UnimplementedCard {
  constructor (game) {
    super(game, "Westvale Cult Leader", "Shadows over Innistrad", "SOI");
  }
}

module.exports = WestvaleCultLeader;
