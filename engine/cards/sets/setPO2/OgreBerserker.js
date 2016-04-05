"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OgreBerserker extends UnimplementedCard {
  constructor(game) {
    super(game, "Ogre Berserker", "Portal Second Age", "PO2");
  }
}

module.exports = OgreBerserker;
