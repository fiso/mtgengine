"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KnacksawClique extends Card {
  constructor(game) {
    super(game, "Knacksaw Clique", "Shadowmoor", "SHM");
  }
}

module.exports = KnacksawClique;
