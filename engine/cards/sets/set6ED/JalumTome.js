"use strict";
const Constants = require ("../../../Constants");
const JalumTomeBase = require("../setATH/JalumTome");

class JalumTome extends JalumTomeBase {
  constructor(game) {
    super(game, "Jalum Tome", "Classic Sixth Edition", "6ED");
  }
}

module.exports = JalumTome;
