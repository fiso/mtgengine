"use strict";
const Constants = require ("../../../Constants");
const AethersnipeBase = require("../setDD3_JVC/Aethersnipe");

class Aethersnipe extends AethersnipeBase {
  constructor(game) {
    super(game, "Æthersnipe", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Aethersnipe;
