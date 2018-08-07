"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrazingKelpie extends UnimplementedCard {
  constructor (game) {
    super(game, "Grazing Kelpie", "Eventide", "EVE");
  }
}

module.exports = GrazingKelpie;
