"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofTombstones extends Card {
  constructor(game) {
    super(game, "Wall of Tombstones", "Legends", "LEG");
  }
}

module.exports = WallofTombstones;
