"use strict";
const Constants = require ("../../../Constants");
const MindsAglowBase = require("../setCM2/MindsAglow");

class MindsAglow extends MindsAglowBase {
  constructor (game) {
    super(game, "Minds Aglow", "Commander 2011", "CMD");
  }
}

module.exports = MindsAglow;
