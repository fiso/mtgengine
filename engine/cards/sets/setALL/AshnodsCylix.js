"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AshnodsCylix extends Card {
  constructor(game) {
    super(game, "Ashnod's Cylix", "Alliances", "ALL");
  }
}

module.exports = AshnodsCylix;
