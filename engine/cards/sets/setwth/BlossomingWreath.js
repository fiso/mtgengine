"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlossomingWreath extends UnimplementedCard {
  constructor(game) {
    super(game, "Blossoming Wreath", "Weatherlight", "WTH");
  }
}

module.exports = BlossomingWreath;
