"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DireFleetHoarder extends UnimplementedCard {
  constructor (game) {
    super(game, "Dire Fleet Hoarder", "Ixalan", "XLN");
  }
}

module.exports = DireFleetHoarder;
