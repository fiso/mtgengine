"use strict";
const Constants = require ("../../../Constants");
const MarshCasualtiesBase = require("../setDDP/MarshCasualties");

class MarshCasualties extends MarshCasualtiesBase {
  constructor (game) {
    super(game, "Marsh Casualties", "Zendikar", "ZEN");
  }
}

module.exports = MarshCasualties;
