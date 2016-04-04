"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Havoc extends Card {
  constructor(game) {
    super(game, "Havoc", "Tempest", "TMP");
  }
}

module.exports = Havoc;
