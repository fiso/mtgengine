"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeapDoll extends UnimplementedCard {
  constructor (game) {
    super(game, "Heap Doll", "Shadowmoor", "SHM");
  }
}

module.exports = HeapDoll;
