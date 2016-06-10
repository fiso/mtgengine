"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CreakwoodLiege extends UnimplementedCard {
  constructor (game) {
    super(game, "Creakwood Liege", "Eventide", "EVE");
  }
}

module.exports = CreakwoodLiege;
