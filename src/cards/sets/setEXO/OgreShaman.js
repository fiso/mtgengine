"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OgreShaman extends UnimplementedCard {
  constructor (game) {
    super(game, "Ogre Shaman", "Exodus", "EXO");
  }
}

module.exports = OgreShaman;
