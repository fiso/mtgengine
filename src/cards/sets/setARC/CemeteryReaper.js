"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CemeteryReaper extends UnimplementedCard {
  constructor (game) {
    super(game, "Cemetery Reaper", "Archenemy", "ARC");
  }
}

module.exports = CemeteryReaper;
