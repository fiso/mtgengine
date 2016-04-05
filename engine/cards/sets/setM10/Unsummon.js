"use strict";
const Constants = require ("../../../Constants");
const UnsummonBase = require("../set6ED/Unsummon");

class Unsummon extends UnsummonBase {
  constructor(game) {
    super(game, "Unsummon", "Magic 2010", "M10");
  }
}

module.exports = Unsummon;
