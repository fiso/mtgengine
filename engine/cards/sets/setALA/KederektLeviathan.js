"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KederektLeviathan extends Card {
  constructor(game) {
    super(game, "Kederekt Leviathan", "Shards of Alara", "ALA");
  }
}

module.exports = KederektLeviathan;
