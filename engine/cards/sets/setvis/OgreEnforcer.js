"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OgreEnforcer extends Card {
  constructor(game) {
    super(game, "Ogre Enforcer", "Visions", "VIS");
  }
}

module.exports = OgreEnforcer;
