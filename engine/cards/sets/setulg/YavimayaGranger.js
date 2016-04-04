"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class YavimayaGranger extends Card {
  constructor(game) {
    super(game, "Yavimaya Granger", "Urza's Legacy", "ULG");
  }
}

module.exports = YavimayaGranger;
