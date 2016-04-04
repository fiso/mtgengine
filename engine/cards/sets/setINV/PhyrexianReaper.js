"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianReaper extends UnimplementedCard {
  constructor(game) {
    super(game, "Phyrexian Reaper", "Invasion", "INV");
  }
}

module.exports = PhyrexianReaper;
