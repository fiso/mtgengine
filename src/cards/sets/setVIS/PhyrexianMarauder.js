"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianMarauder extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Marauder", "Visions", "VIS");
  }
}

module.exports = PhyrexianMarauder;
