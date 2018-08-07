"use strict";
const Constants = require ("../../../Constants");
const ScytheLeopardBase = require("../setDDR/ScytheLeopard");

class ScytheLeopard extends ScytheLeopardBase {
  constructor (game) {
    super(game, "Scythe Leopard", "Battle for Zendikar", "BFZ");
  }
}

module.exports = ScytheLeopard;
