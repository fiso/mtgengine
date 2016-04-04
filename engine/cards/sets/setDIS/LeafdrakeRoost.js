"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LeafdrakeRoostBase = require("../setC13/LeafdrakeRoost.js");

class LeafdrakeRoost extends LeafdrakeRoostBase {
  constructor(game) {
    super(game, "Leafdrake Roost", "Dissension", "DIS");
  }
}

module.exports = LeafdrakeRoost;
