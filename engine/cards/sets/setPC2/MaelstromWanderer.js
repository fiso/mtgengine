"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MaelstromWandererBase = require("../setCM1/MaelstromWanderer.js");

class MaelstromWanderer extends MaelstromWandererBase {
  constructor(game) {
    super(game, "Maelstrom Wanderer", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = MaelstromWanderer;
