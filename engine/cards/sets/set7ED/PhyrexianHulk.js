"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhyrexianHulkBase = require("../setDDE/PhyrexianHulk.js");

class PhyrexianHulk extends PhyrexianHulkBase {
  constructor(game) {
    super(game, "Phyrexian Hulk", "Seventh Edition", "7ED");
  }
}

module.exports = PhyrexianHulk;
