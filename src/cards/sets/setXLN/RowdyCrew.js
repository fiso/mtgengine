"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RowdyCrew extends UnimplementedCard {
  constructor (game) {
    super(game, "Rowdy Crew", "Ixalan", "XLN");
  }
}

module.exports = RowdyCrew;
