"use strict";
const Constants = require ("../../../Constants");
const TheMaelstromBase = require("../setPCA/TheMaelstrom");

class TheMaelstrom extends TheMaelstromBase {
  constructor (game) {
    super(game, "The Maelstrom", "Planechase", "HOP");
  }
}

module.exports = TheMaelstrom;
