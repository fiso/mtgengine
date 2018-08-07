"use strict";
const Constants = require ("../../../Constants");
const JuniperOrderRangerBase = require("../setCM2/JuniperOrderRanger");

class JuniperOrderRanger extends JuniperOrderRangerBase {
  constructor (game) {
    super(game, "Juniper Order Ranger", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = JuniperOrderRanger;
