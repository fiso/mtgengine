"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThundermareBase = require("../set9ED/Thundermare.js");

class Thundermare extends ThundermareBase {
  constructor(game) {
    super(game, "Thundermare", "Portal", "POR");
  }
}

module.exports = Thundermare;
