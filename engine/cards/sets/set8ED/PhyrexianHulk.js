"use strict";
const Constants = require ("../../../Constants");
const PhyrexianHulkBase = require("../setDDE/PhyrexianHulk");

class PhyrexianHulk extends PhyrexianHulkBase {
  constructor(game) {
    super(game, "Phyrexian Hulk", "Eighth Edition", "8ED");
  }
}

module.exports = PhyrexianHulk;
