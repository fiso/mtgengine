"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HavengulRunebinderBase = require("../setDKA/HavengulRunebinder.js");

class HavengulRunebinder extends HavengulRunebinderBase {
  constructor(game) {
    super(game, "Havengul Runebinder", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = HavengulRunebinder;
