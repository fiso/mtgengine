"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OgreLeadfoot extends Card {
  constructor(game) {
    super(game, "Ogre Leadfoot", "Mirrodin", "MRD");
  }
}

module.exports = OgreLeadfoot;
