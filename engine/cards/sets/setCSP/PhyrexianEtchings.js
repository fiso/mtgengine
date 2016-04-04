"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianEtchings extends UnimplementedCard {
  constructor(game) {
    super(game, "Phyrexian Etchings", "Coldsnap", "CSP");
  }
}

module.exports = PhyrexianEtchings;
