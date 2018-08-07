"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MakeshiftMunitions extends UnimplementedCard {
  constructor (game) {
    super(game, "Makeshift Munitions", "Ixalan", "XLN");
  }
}

module.exports = MakeshiftMunitions;
