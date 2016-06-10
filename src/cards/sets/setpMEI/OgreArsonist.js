"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OgreArsonist extends UnimplementedCard {
  constructor (game) {
    super(game, "Ogre Arsonist", "Media Inserts", "pMEI");
  }
}

module.exports = OgreArsonist;
