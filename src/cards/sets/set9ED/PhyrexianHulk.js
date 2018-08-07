"use strict";
const Constants = require ("../../../Constants");
const PhyrexianHulkBase = require("../setTPR/PhyrexianHulk");

class PhyrexianHulk extends PhyrexianHulkBase {
  constructor (game) {
    super(game, "Phyrexian Hulk", "Ninth Edition", "9ED");
  }
}

module.exports = PhyrexianHulk;
