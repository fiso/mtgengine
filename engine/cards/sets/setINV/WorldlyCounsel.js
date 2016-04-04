"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WorldlyCounselBase = require("../setCON/WorldlyCounsel.js");

class WorldlyCounsel extends WorldlyCounselBase {
  constructor(game) {
    super(game, "Worldly Counsel", "Invasion", "INV");
  }
}

module.exports = WorldlyCounsel;
