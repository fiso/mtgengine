"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Kindle extends Card {
  constructor(game) {
    super(game, "Kindle", "Tempest", "TMP");
  }
}

module.exports = Kindle;
