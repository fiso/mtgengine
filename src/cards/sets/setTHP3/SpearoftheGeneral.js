"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpearoftheGeneral extends UnimplementedCard {
  constructor (game) {
    super(game, "Spear of the General", "Journey into Nyx Hero's Path", "THP3");
  }
}

module.exports = SpearoftheGeneral;
