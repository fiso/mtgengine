"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OgreEnforcer extends UnimplementedCard {
  constructor(game) {
    super(game, "Ogre Enforcer", "Visions", "VIS");
  }
}

module.exports = OgreEnforcer;
