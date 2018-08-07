"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhobianPhantasm extends UnimplementedCard {
  constructor (game) {
    super(game, "Phobian Phantasm", "Coldsnap", "CSP");
  }
}

module.exports = PhobianPhantasm;
