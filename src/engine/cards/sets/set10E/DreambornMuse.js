"use strict";
const Constants = require ("../../../Constants");
const DreambornMuseBase = require("../setCM2/DreambornMuse");

class DreambornMuse extends DreambornMuseBase {
  constructor (game) {
    super(game, "Dreamborn Muse", "Tenth Edition", "10E");
  }
}

module.exports = DreambornMuse;
