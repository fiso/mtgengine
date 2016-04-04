"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OgreMenial extends Card {
  constructor(game) {
    super(game, "Ogre Menial", "New Phyrexia", "NPH");
  }
}

module.exports = OgreMenial;
