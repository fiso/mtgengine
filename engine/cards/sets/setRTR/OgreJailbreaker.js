"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OgreJailbreaker extends UnimplementedCard {
  constructor(game) {
    super(game, "Ogre Jailbreaker", "Return to Ravnica", "RTR");
  }
}

module.exports = OgreJailbreaker;
