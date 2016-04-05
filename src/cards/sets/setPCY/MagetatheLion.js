"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagetatheLion extends UnimplementedCard {
  constructor(game) {
    super(game, "Mageta the Lion", "Prophecy", "PCY");
  }
}

module.exports = MagetatheLion;
