"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DoomsdaySpecter extends Card {
  constructor(game) {
    super(game, "Doomsday Specter", "Planeshift", "PLS");
  }
}

module.exports = DoomsdaySpecter;
