"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScaldingTongs extends Card {
  constructor(game) {
    super(game, "Scalding Tongs", "Tempest", "TMP");
  }
}

module.exports = ScaldingTongs;
