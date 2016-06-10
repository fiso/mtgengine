"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OgreTaskmaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Ogre Taskmaster", "Eighth Edition", "8ED");
  }
}

module.exports = OgreTaskmaster;
