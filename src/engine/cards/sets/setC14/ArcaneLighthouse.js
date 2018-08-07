"use strict";
const Constants = require ("../../../Constants");
const ArcaneLighthouseBase = require("../setCM2/ArcaneLighthouse");

class ArcaneLighthouse extends ArcaneLighthouseBase {
  constructor (game) {
    super(game, "Arcane Lighthouse", "Commander 2014", "C14");
  }
}

module.exports = ArcaneLighthouse;
