"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScaldingTarn extends Card {
  constructor(game) {
    super(game, "Scalding Tarn", "Zendikar", "ZEN");
  }
}

module.exports = ScaldingTarn;
