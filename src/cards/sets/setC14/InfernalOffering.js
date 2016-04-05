"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InfernalOffering extends UnimplementedCard {
  constructor(game) {
    super(game, "Infernal Offering", "Commander 2014", "C14");
  }
}

module.exports = InfernalOffering;
