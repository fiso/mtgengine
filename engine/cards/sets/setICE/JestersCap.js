"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JestersCapBase = require("../set5ED/JestersCap.js");

class JestersCap extends JestersCapBase {
  constructor(game) {
    super(game, "Jester's Cap", "Ice Age", "ICE");
  }
}

module.exports = JestersCap;
