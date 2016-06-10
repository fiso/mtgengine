"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagetasBoon extends UnimplementedCard {
  constructor (game) {
    super(game, "Mageta's Boon", "Prophecy", "PCY");
  }
}

module.exports = MagetasBoon;
