"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FortressCrab extends UnimplementedCard {
  constructor (game) {
    super(game, "Fortress Crab", "Innistrad", "ISD");
  }
}

module.exports = FortressCrab;
