"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScoriaCat extends UnimplementedCard {
  constructor(game) {
    super(game, "Scoria Cat", "Prophecy", "PCY");
  }
}

module.exports = ScoriaCat;
