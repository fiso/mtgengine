"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofTombstones extends UnimplementedCard {
  constructor(game) {
    super(game, "Wall of Tombstones", "Legends", "LEG");
  }
}

module.exports = WallofTombstones;
