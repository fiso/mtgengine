"use strict";
const Constants = require ("../../../Constants");
const JalumTomeBase = require("../setCM2/JalumTome");

class JalumTome extends JalumTomeBase {
  constructor (game) {
    super(game, "Jalum Tome", "Fifth Edition", "5ED");
  }
}

module.exports = JalumTome;
