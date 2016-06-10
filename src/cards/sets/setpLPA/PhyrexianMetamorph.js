"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianMetamorph extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Metamorph", "Launch Parties", "pLPA");
  }
}

module.exports = PhyrexianMetamorph;
