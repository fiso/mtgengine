"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OgreGatecrasher extends UnimplementedCard {
  constructor (game) {
    super(game, "Ogre Gatecrasher", "Dissension", "DIS");
  }
}

module.exports = OgreGatecrasher;
