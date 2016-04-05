"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dehydration extends UnimplementedCard {
  constructor(game) {
    super(game, "Dehydration", "Eighth Edition", "8ED");
  }
}

module.exports = Dehydration;
