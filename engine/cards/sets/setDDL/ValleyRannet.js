"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ValleyRannetBase = require("../setARB/ValleyRannet.js");

class ValleyRannet extends ValleyRannetBase {
  constructor(game) {
    super(game, "Valley Rannet", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = ValleyRannet;
