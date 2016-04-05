"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OgreMarauder extends UnimplementedCard {
  constructor(game) {
    super(game, "Ogre Marauder", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = OgreMarauder;
