"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OgreSavantBase = require("../setDDH/OgreSavant.js");

class OgreSavant extends OgreSavantBase {
  constructor(game) {
    super(game, "Ogre Savant", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = OgreSavant;
