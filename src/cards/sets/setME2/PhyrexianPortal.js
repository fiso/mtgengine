"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianPortal extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Portal", "Masters Edition II", "ME2");
  }
}

module.exports = PhyrexianPortal;
