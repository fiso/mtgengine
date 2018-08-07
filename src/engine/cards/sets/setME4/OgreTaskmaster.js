"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OgreTaskmaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Ogre Taskmaster", "Masters Edition IV", "ME4");
  }
}

module.exports = OgreTaskmaster;
