"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiscipleofPhenax extends UnimplementedCard {
  constructor(game) {
    super(game, "Disciple of Phenax", "Theros", "THS");
  }
}

module.exports = DiscipleofPhenax;
