"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Vampirism extends Card {
  constructor(game) {
    super(game, "Vampirism", "Multiverse Gift Box", "MGB");
  }
}

module.exports = Vampirism;
