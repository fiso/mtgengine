"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StasisCell extends UnimplementedCard {
  constructor (game) {
    super(game, "Stasis Cell", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = StasisCell;
