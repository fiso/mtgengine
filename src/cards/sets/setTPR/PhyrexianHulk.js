"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianHulk extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Hulk", "Tempest Remastered", "TPR");
  }
}

module.exports = PhyrexianHulk;
