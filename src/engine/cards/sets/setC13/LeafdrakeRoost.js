"use strict";
const Constants = require ("../../../Constants");
const LeafdrakeRoostBase = require("../setCMA/LeafdrakeRoost");

class LeafdrakeRoost extends LeafdrakeRoostBase {
  constructor (game) {
    super(game, "Leafdrake Roost", "Commander 2013", "C13");
  }
}

module.exports = LeafdrakeRoost;
