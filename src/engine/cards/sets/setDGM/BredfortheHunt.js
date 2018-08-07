"use strict";
const Constants = require ("../../../Constants");
const BredfortheHuntBase = require("../setCM2/BredfortheHunt");

class BredfortheHunt extends BredfortheHuntBase {
  constructor (game) {
    super(game, "Bred for the Hunt", "Dragon's Maze", "DGM");
  }
}

module.exports = BredfortheHunt;
