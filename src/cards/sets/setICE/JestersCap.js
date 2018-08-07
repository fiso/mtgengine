"use strict";
const Constants = require ("../../../Constants");
const JestersCapBase = require("../setV10/JestersCap");

class JestersCap extends JestersCapBase {
  constructor (game) {
    super(game, "Jester's Cap", "Ice Age", "ICE");
  }
}

module.exports = JestersCap;
