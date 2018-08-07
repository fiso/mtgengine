"use strict";
const Constants = require ("../../../Constants");
const RushingRiverBase = require("../setWC02/RushingRiver");

class RushingRiver extends RushingRiverBase {
  constructor (game) {
    super(game, "Rushing River", "World Championship Decks 2001", "WC01");
  }
}

module.exports = RushingRiver;
