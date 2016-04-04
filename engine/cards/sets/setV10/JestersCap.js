"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JestersCapBase = require("../set5ED/JestersCap.js");

class JestersCap extends JestersCapBase {
  constructor(game) {
    super(game, "Jester's Cap", "From the Vault: Relics", "V10");
  }
}

module.exports = JestersCap;
