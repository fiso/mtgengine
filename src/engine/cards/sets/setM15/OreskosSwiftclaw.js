"use strict";
const Constants = require ("../../../Constants");
const OreskosSwiftclawBase = require("../setM19/OreskosSwiftclaw");

class OreskosSwiftclaw extends OreskosSwiftclawBase {
  constructor (game) {
    super(game, "Oreskos Swiftclaw", "Magic 2015", "M15");
  }
}

module.exports = OreskosSwiftclaw;
