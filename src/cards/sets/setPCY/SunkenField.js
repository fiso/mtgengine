"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SunkenField extends UnimplementedCard {
  constructor (game) {
    super(game, "Sunken Field", "Prophecy", "PCY");
  }
}

module.exports = SunkenField;
