"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ogre extends UnimplementedCard {
  constructor (game) {
    super(game, "Ogre", "Commander 2016 Tokens", "TC16");
  }
}

module.exports = Ogre;
