"use strict";
const Constants = require ("../../../Constants");
const JotunGruntBase = require("../setCSP/JotunGrunt");

class JotunGrunt extends JotunGruntBase {
  constructor (game) {
    super(game, "Jötun Grunt", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = JotunGrunt;
