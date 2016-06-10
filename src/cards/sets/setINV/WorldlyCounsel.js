"use strict";
const Constants = require ("../../../Constants");
const WorldlyCounselBase = require("../setCON/WorldlyCounsel");

class WorldlyCounsel extends WorldlyCounselBase {
  constructor (game) {
    super(game, "Worldly Counsel", "Invasion", "INV");
  }
}

module.exports = WorldlyCounsel;
