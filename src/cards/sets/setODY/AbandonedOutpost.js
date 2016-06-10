"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AbandonedOutpost extends UnimplementedCard {
  constructor (game) {
    super(game, "Abandoned Outpost", "Odyssey", "ODY");
  }
}

module.exports = AbandonedOutpost;
