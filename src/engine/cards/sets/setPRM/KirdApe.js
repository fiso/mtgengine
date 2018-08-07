"use strict";
const Constants = require ("../../../Constants");
const KirdApeBase = require("../setEMA/KirdApe");

class KirdApe extends KirdApeBase {
  constructor (game) {
    super(game, "Kird Ape", "Magic Online Promos", "PRM");
  }
}

module.exports = KirdApe;
