"use strict";
const Constants = require ("../../../Constants");
const JotunGruntBase = require("../setCMD/JotunGrunt");

class JotunGrunt extends JotunGruntBase {
  constructor (game) {
    super(game, "Jötun Grunt", "Coldsnap", "CSP");
  }
}

module.exports = JotunGrunt;
