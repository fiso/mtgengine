"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class YavimayaCoast extends Card {
  constructor(game) {
    super(game, "Yavimaya Coast", "Apocalypse", "APC");
  }
}

module.exports = YavimayaCoast;
