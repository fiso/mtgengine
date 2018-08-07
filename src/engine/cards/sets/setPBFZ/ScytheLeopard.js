"use strict";
const Constants = require ("../../../Constants");
const ScytheLeopardBase = require("../setDDR/ScytheLeopard");

class ScytheLeopard extends ScytheLeopardBase {
  constructor (game) {
    super(game, "Scythe Leopard", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = ScytheLeopard;
