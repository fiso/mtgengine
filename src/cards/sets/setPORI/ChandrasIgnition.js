"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChandrasIgnition extends UnimplementedCard {
  constructor (game) {
    super(game, "Chandra's Ignition", "Magic Origins Promos", "PORI");
  }
}

module.exports = ChandrasIgnition;
