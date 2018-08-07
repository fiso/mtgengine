"use strict";
const Constants = require ("../../../Constants");
const JettingGlasskiteBase = require("../setEMA/JettingGlasskite");

class JettingGlasskite extends JettingGlasskiteBase {
  constructor (game) {
    super(game, "Jetting Glasskite", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = JettingGlasskite;
