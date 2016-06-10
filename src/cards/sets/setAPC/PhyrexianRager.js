"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianRager extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Rager", "Apocalypse", "APC");
  }
}

module.exports = PhyrexianRager;
