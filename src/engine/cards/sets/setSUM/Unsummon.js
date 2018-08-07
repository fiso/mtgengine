"use strict";
const Constants = require ("../../../Constants");
const UnsummonBase = require("../setE02/Unsummon");

class Unsummon extends UnsummonBase {
  constructor (game) {
    super(game, "Unsummon", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = Unsummon;
