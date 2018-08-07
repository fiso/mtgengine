"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianScuta extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Scuta", "World Championship Decks 2001", "WC01");
  }
}

module.exports = PhyrexianScuta;
