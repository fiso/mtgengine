"use strict";
const Constants = require ("../../../Constants");
const StormEntityBase = require("../setFUT/StormEntity");

class StormEntity extends StormEntityBase {
  constructor (game) {
    super(game, "Storm Entity", "Release Events", "pREL");
  }
}

module.exports = StormEntity;
