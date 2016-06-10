"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianWarBeast extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian War Beast", "Alliances", "ALL");
  }
}

module.exports = PhyrexianWarBeast;
