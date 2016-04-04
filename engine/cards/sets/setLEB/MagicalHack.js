"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MagicalHackBase = require("../setCED/MagicalHack.js");

class MagicalHack extends MagicalHackBase {
  constructor(game) {
    super(game, "Magical Hack", "Limited Edition Beta", "LEB");
  }
}

module.exports = MagicalHack;
