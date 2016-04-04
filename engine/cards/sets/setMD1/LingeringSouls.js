"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LingeringSoulsBase = require("../setDKA/LingeringSouls.js");

class LingeringSouls extends LingeringSoulsBase {
  constructor(game) {
    super(game, "Lingering Souls", "Modern Event Deck 2014", "MD1");
  }
}

module.exports = LingeringSouls;
