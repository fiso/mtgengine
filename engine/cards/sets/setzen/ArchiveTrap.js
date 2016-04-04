"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArchiveTrap extends Card {
  constructor(game) {
    super(game, "Archive Trap", "Zendikar", "ZEN");
  }
}

module.exports = ArchiveTrap;
