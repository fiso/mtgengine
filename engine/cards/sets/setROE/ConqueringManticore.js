"use strict";
const Constants = require ("../../../Constants");
const ConqueringManticoreBase = require("../setDDL/ConqueringManticore");

class ConqueringManticore extends ConqueringManticoreBase {
  constructor(game) {
    super(game, "Conquering Manticore", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = ConqueringManticore;
