"use strict";
const Constants = require ("../../../Constants");
const KirdApeBase = require("../setARN/KirdApe");

class KirdApe extends KirdApeBase {
  constructor (game) {
    super(game, "Kird Ape", "Eternal Masters", "EMA");
  }
}

module.exports = KirdApe;
