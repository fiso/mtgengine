"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IntellectualOffering extends UnimplementedCard {
  constructor (game) {
    super(game, "Intellectual Offering", "Commander 2014", "C14");
  }
}

module.exports = IntellectualOffering;
