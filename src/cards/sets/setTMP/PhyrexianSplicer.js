"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianSplicer extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Splicer", "Tempest", "TMP");
  }
}

module.exports = PhyrexianSplicer;
