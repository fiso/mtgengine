"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OgreLeadfoot extends UnimplementedCard {
  constructor(game) {
    super(game, "Ogre Leadfoot", "Mirrodin", "MRD");
  }
}

module.exports = OgreLeadfoot;
