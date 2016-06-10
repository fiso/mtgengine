"use strict";
const Constants = require ("../../../Constants");
const FigureofDestinyBase = require("../setDDL/FigureofDestiny");

class FigureofDestiny extends FigureofDestinyBase {
  constructor (game) {
    super(game, "Figure of Destiny", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = FigureofDestiny;
