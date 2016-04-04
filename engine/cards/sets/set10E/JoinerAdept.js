"use strict";
const Constants = require ("../../../Constants");
const JoinerAdeptBase = require("../set5DN/JoinerAdept");

class JoinerAdept extends JoinerAdeptBase {
  constructor(game) {
    super(game, "Joiner Adept", "Tenth Edition", "10E");
  }
}

module.exports = JoinerAdept;
