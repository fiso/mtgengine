"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TineShrike extends UnimplementedCard {
  constructor (game) {
    super(game, "Tine Shrike", "Mirrodin Besieged", "MBS");
  }
}

module.exports = TineShrike;
