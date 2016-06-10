"use strict";
const Constants = require ("../../../Constants");
const JuniperOrderRangerBase = require("../setCSP/JuniperOrderRanger");

class JuniperOrderRanger extends JuniperOrderRangerBase {
  constructor (game) {
    super(game, "Juniper Order Ranger", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = JuniperOrderRanger;
