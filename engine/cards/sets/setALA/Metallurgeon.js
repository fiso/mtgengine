"use strict";
const Constants = require ("../../../Constants");
const MetallurgeonBase = require("../setARC/Metallurgeon");

class Metallurgeon extends MetallurgeonBase {
  constructor(game) {
    super(game, "Metallurgeon", "Shards of Alara", "ALA");
  }
}

module.exports = Metallurgeon;
