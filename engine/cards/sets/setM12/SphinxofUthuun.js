"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SphinxofUthuunBase = require("../setC14/SphinxofUthuun.js");

class SphinxofUthuun extends SphinxofUthuunBase {
  constructor(game) {
    super(game, "Sphinx of Uthuun", "Magic 2012", "M12");
  }
}

module.exports = SphinxofUthuun;
