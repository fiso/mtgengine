"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StasisCell extends UnimplementedCard {
  constructor (game) {
    super(game, "Stasis Cell", "Conspiracy", "CNS");
  }
}

module.exports = StasisCell;
