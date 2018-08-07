"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DakmorSorceress extends UnimplementedCard {
  constructor (game) {
    super(game, "Dakmor Sorceress", "Starter 1999", "S99");
  }
}

module.exports = DakmorSorceress;
