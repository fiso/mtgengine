"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HelldozerBase = require("../setHOP/Helldozer.js");

class Helldozer extends HelldozerBase {
  constructor(game) {
    super(game, "Helldozer", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Helldozer;
