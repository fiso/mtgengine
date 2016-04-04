"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WhimofVolrath extends Card {
  constructor(game) {
    super(game, "Whim of Volrath", "Tempest", "TMP");
  }
}

module.exports = WhimofVolrath;
