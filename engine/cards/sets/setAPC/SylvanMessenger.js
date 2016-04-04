"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SylvanMessenger extends Card {
  constructor(game) {
    super(game, "Sylvan Messenger", "Apocalypse", "APC");
  }
}

module.exports = SylvanMessenger;
