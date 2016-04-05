"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianWalker extends UnimplementedCard {
  constructor(game) {
    super(game, "Phyrexian Walker", "Visions", "VIS");
  }
}

module.exports = PhyrexianWalker;
