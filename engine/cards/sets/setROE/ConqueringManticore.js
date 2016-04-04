"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ConqueringManticoreBase = require("../setDDL/ConqueringManticore.js");

class ConqueringManticore extends ConqueringManticoreBase {
  constructor(game) {
    super(game, "Conquering Manticore", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = ConqueringManticore;
