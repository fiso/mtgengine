"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrazingWhiptail extends UnimplementedCard {
  constructor (game) {
    super(game, "Grazing Whiptail", "Ixalan", "XLN");
  }
}

module.exports = GrazingWhiptail;
