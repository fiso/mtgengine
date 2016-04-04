"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AbandonHope extends Card {
  constructor(game) {
    super(game, "Abandon Hope", "Tempest", "TMP");
  }
}

module.exports = AbandonHope;
