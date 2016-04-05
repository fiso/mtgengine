"use strict";
const Constants = require ("../../../Constants");
const LeafdrakeRoostBase = require("../setC13/LeafdrakeRoost");

class LeafdrakeRoost extends LeafdrakeRoostBase {
  constructor(game) {
    super(game, "Leafdrake Roost", "Dissension", "DIS");
  }
}

module.exports = LeafdrakeRoost;
