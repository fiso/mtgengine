"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianDriver extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Driver", "Nemesis", "NEM");
  }
}

module.exports = PhyrexianDriver;
