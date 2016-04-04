"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TerminateBase = require("../setARB/Terminate.js");

class Terminate extends TerminateBase {
  constructor(game) {
    super(game, "Terminate", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = Terminate;
