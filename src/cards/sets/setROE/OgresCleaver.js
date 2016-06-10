"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OgresCleaver extends UnimplementedCard {
  constructor (game) {
    super(game, "Ogre's Cleaver", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = OgresCleaver;
