"use strict";
const Constants = require ("../../../Constants");
const PhyrexianHulkBase = require("../setTPR/PhyrexianHulk");

class PhyrexianHulk extends PhyrexianHulkBase {
  constructor (game) {
    super(game, "Phyrexian Hulk", "Magic 2013", "M13");
  }
}

module.exports = PhyrexianHulk;
