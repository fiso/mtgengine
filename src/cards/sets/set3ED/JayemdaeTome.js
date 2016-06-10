"use strict";
const Constants = require ("../../../Constants");
const JayemdaeTomeBase = require("../set6ED/JayemdaeTome");

class JayemdaeTome extends JayemdaeTomeBase {
  constructor (game) {
    super(game, "Jayemdae Tome", "Revised Edition", "3ED");
  }
}

module.exports = JayemdaeTome;
