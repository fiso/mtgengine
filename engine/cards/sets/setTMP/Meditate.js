"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Meditate extends Card {
  constructor(game) {
    super(game, "Meditate", "Tempest", "TMP");
  }
}

module.exports = Meditate;
