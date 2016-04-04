"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MultanisPresence extends Card {
  constructor(game) {
    super(game, "Multani's Presence", "Urza's Legacy", "ULG");
  }
}

module.exports = MultanisPresence;
