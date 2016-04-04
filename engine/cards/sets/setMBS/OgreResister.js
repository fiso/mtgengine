"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OgreResister extends UnimplementedCard {
  constructor(game) {
    super(game, "Ogre Resister", "Mirrodin Besieged", "MBS");
  }
}

module.exports = OgreResister;
