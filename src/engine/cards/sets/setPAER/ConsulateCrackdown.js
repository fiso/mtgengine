"use strict";
const Constants = require ("../../../Constants");
const ConsulateCrackdownBase = require("../setAER/ConsulateCrackdown");

class ConsulateCrackdown extends ConsulateCrackdownBase {
  constructor (game) {
    super(game, "Consulate Crackdown", "Aether Revolt Promos", "PAER");
  }
}

module.exports = ConsulateCrackdown;
