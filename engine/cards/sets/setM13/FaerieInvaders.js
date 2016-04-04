"use strict";
const Constants = require ("../../../Constants");
const FaerieInvadersBase = require("../setDDN/FaerieInvaders");

class FaerieInvaders extends FaerieInvadersBase {
  constructor(game) {
    super(game, "Faerie Invaders", "Magic 2013", "M13");
  }
}

module.exports = FaerieInvaders;
