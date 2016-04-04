"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhyrexianSlayer extends Card {
  constructor(game) {
    super(game, "Phyrexian Slayer", "Invasion", "INV");
  }
}

module.exports = PhyrexianSlayer;
