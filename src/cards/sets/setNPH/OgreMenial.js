"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OgreMenial extends UnimplementedCard {
  constructor(game) {
    super(game, "Ogre Menial", "New Phyrexia", "NPH");
  }
}

module.exports = OgreMenial;
