"use strict";
const Constants = require ("../../../Constants");
const JoinerAdeptBase = require("../set10E/JoinerAdept");

class JoinerAdept extends JoinerAdeptBase {
  constructor (game) {
    super(game, "Joiner Adept", "Fifth Dawn", "5DN");
  }
}

module.exports = JoinerAdept;
