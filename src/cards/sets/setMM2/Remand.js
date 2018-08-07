"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Remand extends UnimplementedCard {
  constructor (game) {
    super(game, "Remand", "Modern Masters 2015", "MM2");
  }
}

module.exports = Remand;
