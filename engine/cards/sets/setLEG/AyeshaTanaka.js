"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AyeshaTanakaBase = require("../setCHR/AyeshaTanaka.js");

class AyeshaTanaka extends AyeshaTanakaBase {
  constructor(game) {
    super(game, "Ayesha Tanaka", "Legends", "LEG");
  }
}

module.exports = AyeshaTanaka;
