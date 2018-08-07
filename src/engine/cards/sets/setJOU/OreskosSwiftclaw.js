"use strict";
const Constants = require ("../../../Constants");
const OreskosSwiftclawBase = require("../setM19/OreskosSwiftclaw");

class OreskosSwiftclaw extends OreskosSwiftclawBase {
  constructor (game) {
    super(game, "Oreskos Swiftclaw", "Journey into Nyx", "JOU");
  }
}

module.exports = OreskosSwiftclaw;
