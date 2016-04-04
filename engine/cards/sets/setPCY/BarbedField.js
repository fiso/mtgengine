"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarbedField extends UnimplementedCard {
  constructor(game) {
    super(game, "Barbed Field", "Prophecy", "PCY");
  }
}

module.exports = BarbedField;
