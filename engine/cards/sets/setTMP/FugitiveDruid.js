"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FugitiveDruid extends Card {
  constructor(game) {
    super(game, "Fugitive Druid", "Tempest", "TMP");
  }
}

module.exports = FugitiveDruid;
