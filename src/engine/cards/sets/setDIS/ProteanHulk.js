"use strict";
const Constants = require ("../../../Constants");
const ProteanHulkBase = require("../setA25/ProteanHulk");

class ProteanHulk extends ProteanHulkBase {
  constructor (game) {
    super(game, "Protean Hulk", "Dissension", "DIS");
  }
}

module.exports = ProteanHulk;
