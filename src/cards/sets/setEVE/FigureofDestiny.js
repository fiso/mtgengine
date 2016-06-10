"use strict";
const Constants = require ("../../../Constants");
const FigureofDestinyBase = require("../setDDL/FigureofDestiny");

class FigureofDestiny extends FigureofDestinyBase {
  constructor (game) {
    super(game, "Figure of Destiny", "Eventide", "EVE");
  }
}

module.exports = FigureofDestiny;
