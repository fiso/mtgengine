"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DoomsdaySpecter extends UnimplementedCard {
  constructor (game) {
    super(game, "Doomsday Specter", "Planeshift", "PLS");
  }
}

module.exports = DoomsdaySpecter;
