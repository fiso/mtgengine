"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WoodlurkerMimic extends UnimplementedCard {
  constructor (game) {
    super(game, "Woodlurker Mimic", "Eventide", "EVE");
  }
}

module.exports = WoodlurkerMimic;
