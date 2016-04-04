"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrypticCommand extends Card {
  constructor(game) {
    super(game, "Cryptic Command", "Lorwyn", "LRW");
  }
}

module.exports = CrypticCommand;
