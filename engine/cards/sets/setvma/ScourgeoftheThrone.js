"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScourgeoftheThroneBase = require("../setCNS/ScourgeoftheThrone.js");

class ScourgeoftheThrone extends ScourgeoftheThroneBase {
  constructor(game) {
    super(game, "Scourge of the Throne", "Vintage Masters", "VMA");
  }
}

module.exports = ScourgeoftheThrone;
