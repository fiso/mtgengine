"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoltariLancer extends Card {
  constructor(game) {
    super(game, "Soltari Lancer", "Tempest", "TMP");
  }
}

module.exports = SoltariLancer;
