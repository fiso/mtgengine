"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OgreResister extends Card {
  constructor(game) {
    super(game, "Ogre Resister", "Mirrodin Besieged", "MBS");
  }
}

module.exports = OgreResister;
