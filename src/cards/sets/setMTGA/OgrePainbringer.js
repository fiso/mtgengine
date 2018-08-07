"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OgrePainbringer extends UnimplementedCard {
  constructor (game) {
    super(game, "Ogre Painbringer", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = OgrePainbringer;
