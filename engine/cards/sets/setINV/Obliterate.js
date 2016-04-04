"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ObliterateBase = require("../set8ED/Obliterate.js");

class Obliterate extends ObliterateBase {
  constructor(game) {
    super(game, "Obliterate", "Invasion", "INV");
  }
}

module.exports = Obliterate;
