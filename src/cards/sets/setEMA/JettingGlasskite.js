"use strict";
const Constants = require ("../../../Constants");
const JettingGlasskiteBase = require("../setBOK/JettingGlasskite");

class JettingGlasskite extends JettingGlasskiteBase {
  constructor (game) {
    super(game, "Jetting Glasskite", "Eternal Masters", "EMA");
  }
}

module.exports = JettingGlasskite;
