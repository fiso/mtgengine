"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkyDiamond extends UnimplementedCard {
  constructor (game) {
    super(game, "Sky Diamond", "Commander 2014", "C14");
  }
}

module.exports = SkyDiamond;
