"use strict";
const Constants = require ("../../../Constants");
const JestersCapBase = require("../setV10/JestersCap");

class JestersCap extends JestersCapBase {
  constructor (game) {
    super(game, "Jester's Cap", "Ninth Edition", "9ED");
  }
}

module.exports = JestersCap;
