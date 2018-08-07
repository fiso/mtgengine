"use strict";
const Constants = require ("../../../Constants");
const DismantlingBlowBase = require("../setC18/DismantlingBlow");

class DismantlingBlow extends DismantlingBlowBase {
  constructor (game) {
    super(game, "Dismantling Blow", "Invasion", "INV");
  }
}

module.exports = DismantlingBlow;
