"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EpicStruggle extends UnimplementedCard {
  constructor (game) {
    super(game, "Epic Struggle", "Magic Online Promos", "PRM");
  }
}

module.exports = EpicStruggle;
