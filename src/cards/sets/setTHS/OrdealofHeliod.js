"use strict";
const Constants = require ("../../../Constants");
const OrdealofHeliodBase = require("../setA25/OrdealofHeliod");

class OrdealofHeliod extends OrdealofHeliodBase {
  constructor (game) {
    super(game, "Ordeal of Heliod", "Theros", "THS");
  }
}

module.exports = OrdealofHeliod;
