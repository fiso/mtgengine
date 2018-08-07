"use strict";
const Constants = require ("../../../Constants");
const JettingGlasskiteBase = require("../setEMA/JettingGlasskite");

class JettingGlasskite extends JettingGlasskiteBase {
  constructor (game) {
    super(game, "Jetting Glasskite", "Conspiracy", "CNS");
  }
}

module.exports = JettingGlasskite;
