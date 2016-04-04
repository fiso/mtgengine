"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OgreWarrior extends UnimplementedCard {
  constructor(game) {
    super(game, "Ogre Warrior", "Portal Second Age", "PO2");
  }
}

module.exports = OgreWarrior;
