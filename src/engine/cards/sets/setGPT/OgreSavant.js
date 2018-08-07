"use strict";
const Constants = require ("../../../Constants");
const OgreSavantBase = require("../setDDJ/OgreSavant");

class OgreSavant extends OgreSavantBase {
  constructor (game) {
    super(game, "Ogre Savant", "Guildpact", "GPT");
  }
}

module.exports = OgreSavant;
