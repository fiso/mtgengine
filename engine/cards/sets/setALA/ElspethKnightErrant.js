"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElspethKnightErrantBase = require("../setDDF/ElspethKnightErrant.js");

class ElspethKnightErrant extends ElspethKnightErrantBase {
  constructor(game) {
    super(game, "Elspeth, Knight-Errant", "Shards of Alara", "ALA");
  }
}

module.exports = ElspethKnightErrant;
