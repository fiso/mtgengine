"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Thrive extends UnimplementedCard {
  constructor (game) {
    super(game, "Thrive", "Modern Masters 2015", "MM2");
  }
}

module.exports = Thrive;
