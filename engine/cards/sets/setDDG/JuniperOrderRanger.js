"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JuniperOrderRangerBase = require("../setCSP/JuniperOrderRanger.js");

class JuniperOrderRanger extends JuniperOrderRangerBase {
  constructor(game) {
    super(game, "Juniper Order Ranger", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = JuniperOrderRanger;
