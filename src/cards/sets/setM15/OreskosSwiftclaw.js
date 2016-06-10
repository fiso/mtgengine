"use strict";
const Constants = require ("../../../Constants");
const OreskosSwiftclawBase = require("../setJOU/OreskosSwiftclaw");

class OreskosSwiftclaw extends OreskosSwiftclawBase {
  constructor (game) {
    super(game, "Oreskos Swiftclaw", "Magic 2015 Core Set", "M15");
  }
}

module.exports = OreskosSwiftclaw;
