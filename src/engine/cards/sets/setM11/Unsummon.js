"use strict";
const Constants = require ("../../../Constants");
const UnsummonBase = require("../setE02/Unsummon");

class Unsummon extends UnsummonBase {
  constructor (game) {
    super(game, "Unsummon", "Magic 2011", "M11");
  }
}

module.exports = Unsummon;
