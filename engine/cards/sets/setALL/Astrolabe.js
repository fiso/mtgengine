"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Astrolabe extends Card {
  constructor(game) {
    super(game, "Astrolabe", "Alliances", "ALL");
  }
}

module.exports = Astrolabe;
