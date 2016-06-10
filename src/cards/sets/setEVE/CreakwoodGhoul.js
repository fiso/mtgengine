"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CreakwoodGhoul extends UnimplementedCard {
  constructor (game) {
    super(game, "Creakwood Ghoul", "Eventide", "EVE");
  }
}

module.exports = CreakwoodGhoul;
