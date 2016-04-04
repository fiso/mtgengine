"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class YavimayaScion extends Card {
  constructor(game) {
    super(game, "Yavimaya Scion", "Urza's Legacy", "ULG");
  }
}

module.exports = YavimayaScion;
