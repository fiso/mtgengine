"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OgreWarrior extends UnimplementedCard {
  constructor (game) {
    super(game, "Ogre Warrior", "Starter 2000", "S00");
  }
}

module.exports = OgreWarrior;
