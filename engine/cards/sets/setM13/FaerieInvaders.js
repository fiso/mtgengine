"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FaerieInvadersBase = require("../setDDN/FaerieInvaders.js");

class FaerieInvaders extends FaerieInvadersBase {
  constructor(game) {
    super(game, "Faerie Invaders", "Magic 2013", "M13");
  }
}

module.exports = FaerieInvaders;
