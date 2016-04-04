"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SoulWardenBase = require("../setBRB/SoulWarden.js");

class SoulWarden extends SoulWardenBase {
  constructor(game) {
    super(game, "Soul Warden", "Planechase", "HOP");
  }
}

module.exports = SoulWarden;
