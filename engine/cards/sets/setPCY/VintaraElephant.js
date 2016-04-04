"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VintaraElephant extends Card {
  constructor(game) {
    super(game, "Vintara Elephant", "Prophecy", "PCY");
  }
}

module.exports = VintaraElephant;
