"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DakmorSorceress extends UnimplementedCard {
  constructor(game) {
    super(game, "Dakmor Sorceress", "Portal Second Age", "PO2");
  }
}

module.exports = DakmorSorceress;
