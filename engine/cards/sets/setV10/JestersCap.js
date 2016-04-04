"use strict";
const Constants = require ("../../../Constants");
const JestersCapBase = require("../set5ED/JestersCap");

class JestersCap extends JestersCapBase {
  constructor(game) {
    super(game, "Jester's Cap", "From the Vault: Relics", "V10");
  }
}

module.exports = JestersCap;
