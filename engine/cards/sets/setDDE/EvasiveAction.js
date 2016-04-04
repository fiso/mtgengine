"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EvasiveActionBase = require("../setAPC/EvasiveAction.js");

class EvasiveAction extends EvasiveActionBase {
  constructor(game) {
    super(game, "Evasive Action", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = EvasiveAction;
