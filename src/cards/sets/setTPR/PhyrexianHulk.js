"use strict";
const Constants = require ("../../../Constants");
const PhyrexianHulkBase = require("../setDDE/PhyrexianHulk");

class PhyrexianHulk extends PhyrexianHulkBase {
  constructor (game) {
    super(game, "Phyrexian Hulk", "Tempest Remastered", "TPR");
  }
}

module.exports = PhyrexianHulk;
