"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OgreArsonist extends UnimplementedCard {
  constructor (game) {
    super(game, "Ogre Arsonist", "IDW Comics 2013", "PI13");
  }
}

module.exports = OgreArsonist;
