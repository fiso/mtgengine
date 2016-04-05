"use strict";
const Constants = require ("../../../Constants");
const JalumTomeBase = require("../setATH/JalumTome");

class JalumTome extends JalumTomeBase {
  constructor(game) {
    super(game, "Jalum Tome", "Fifth Edition", "5ED");
  }
}

module.exports = JalumTome;
