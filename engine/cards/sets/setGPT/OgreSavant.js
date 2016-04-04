"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OgreSavantBase = require("../setDDH/OgreSavant.js");

class OgreSavant extends OgreSavantBase {
  constructor(game) {
    super(game, "Ogre Savant", "Guildpact", "GPT");
  }
}

module.exports = OgreSavant;
