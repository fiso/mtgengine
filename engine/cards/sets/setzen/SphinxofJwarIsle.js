"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SphinxofJwarIsleBase = require("../setC14/SphinxofJwarIsle.js");

class SphinxofJwarIsle extends SphinxofJwarIsleBase {
  constructor(game) {
    super(game, "Sphinx of Jwar Isle", "Zendikar", "ZEN");
  }
}

module.exports = SphinxofJwarIsle;
