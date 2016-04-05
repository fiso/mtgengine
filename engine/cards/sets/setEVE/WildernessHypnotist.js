"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildernessHypnotist extends UnimplementedCard {
  constructor(game) {
    super(game, "Wilderness Hypnotist", "Eventide", "EVE");
  }
}

module.exports = WildernessHypnotist;
