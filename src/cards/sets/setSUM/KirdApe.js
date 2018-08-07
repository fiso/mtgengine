"use strict";
const Constants = require ("../../../Constants");
const KirdApeBase = require("../setEMA/KirdApe");

class KirdApe extends KirdApeBase {
  constructor (game) {
    super(game, "Kird Ape", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = KirdApe;
