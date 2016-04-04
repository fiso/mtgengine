"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Willbender extends UnimplementedCard {
  constructor(game) {
    super(game, "Willbender", "Commander 2014", "C14");
  }
}

module.exports = Willbender;
