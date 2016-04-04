"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeapDoll extends Card {
  constructor(game) {
    super(game, "Heap Doll", "Shadowmoor", "SHM");
  }
}

module.exports = HeapDoll;
