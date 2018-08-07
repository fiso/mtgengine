"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HammerJammer extends UnimplementedCard {
  constructor (game) {
    super(game, "Hammer Jammer", "Unstable", "UST");
  }
}

module.exports = HammerJammer;
