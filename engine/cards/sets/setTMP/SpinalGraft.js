"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpinalGraft extends Card {
  constructor(game) {
    super(game, "Spinal Graft", "Tempest", "TMP");
  }
}

module.exports = SpinalGraft;
