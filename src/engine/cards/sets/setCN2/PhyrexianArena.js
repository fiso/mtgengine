"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianArena extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Arena", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = PhyrexianArena;
