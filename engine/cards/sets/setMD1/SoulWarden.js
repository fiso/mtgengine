"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SoulWardenBase = require("../setBRB/SoulWarden.js");

class SoulWarden extends SoulWardenBase {
  constructor(game) {
    super(game, "Soul Warden", "Modern Event Deck 2014", "MD1");
  }
}

module.exports = SoulWarden;
