"use strict";
const Constants = require ("../../../Constants");
const JayemdaeTomeBase = require("../set6ED/JayemdaeTome");

class JayemdaeTome extends JayemdaeTomeBase {
  constructor (game) {
    super(game, "Jayemdae Tome", "Limited Edition Beta", "LEB");
  }
}

module.exports = JayemdaeTome;
