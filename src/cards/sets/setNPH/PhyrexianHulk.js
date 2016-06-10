"use strict";
const Constants = require ("../../../Constants");
const PhyrexianHulkBase = require("../setDDE/PhyrexianHulk");

class PhyrexianHulk extends PhyrexianHulkBase {
  constructor (game) {
    super(game, "Phyrexian Hulk", "New Phyrexia", "NPH");
  }
}

module.exports = PhyrexianHulk;
