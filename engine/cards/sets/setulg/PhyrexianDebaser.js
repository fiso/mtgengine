"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhyrexianDebaserBase = require("../setDDE/PhyrexianDebaser.js");

class PhyrexianDebaser extends PhyrexianDebaserBase {
  constructor(game) {
    super(game, "Phyrexian Debaser", "Urza's Legacy", "ULG");
  }
}

module.exports = PhyrexianDebaser;
