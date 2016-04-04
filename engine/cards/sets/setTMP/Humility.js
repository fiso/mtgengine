"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Humility extends Card {
  constructor(game) {
    super(game, "Humility", "Tempest", "TMP");
  }
}

module.exports = Humility;
