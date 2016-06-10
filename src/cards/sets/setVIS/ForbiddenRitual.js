"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForbiddenRitual extends UnimplementedCard {
  constructor (game) {
    super(game, "Forbidden Ritual", "Visions", "VIS");
  }
}

module.exports = ForbiddenRitual;
