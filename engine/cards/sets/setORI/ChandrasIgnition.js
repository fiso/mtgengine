"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChandrasIgnition extends UnimplementedCard {
  constructor(game) {
    super(game, "Chandra's Ignition", "Magic Origins", "ORI");
  }
}

module.exports = ChandrasIgnition;
