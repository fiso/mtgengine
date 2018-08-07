"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SigilBlessing extends UnimplementedCard {
  constructor (game) {
    super(game, "Sigil Blessing", "Modern Masters 2015", "MM2");
  }
}

module.exports = SigilBlessing;
