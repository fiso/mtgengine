"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrixisSojourners extends UnimplementedCard {
  constructor (game) {
    super(game, "Grixis Sojourners", "Alara Reborn", "ARB");
  }
}

module.exports = GrixisSojourners;
