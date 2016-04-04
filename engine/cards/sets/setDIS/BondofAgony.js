"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BondofAgony extends UnimplementedCard {
  constructor(game) {
    super(game, "Bond of Agony", "Dissension", "DIS");
  }
}

module.exports = BondofAgony;
