"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OgreRecluse extends UnimplementedCard {
  constructor(game) {
    super(game, "Ogre Recluse", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = OgreRecluse;
