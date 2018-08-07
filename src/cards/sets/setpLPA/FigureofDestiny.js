"use strict";
const Constants = require ("../../../Constants");
const FigureofDestinyBase = require("../setDDL/FigureofDestiny");

class FigureofDestiny extends FigureofDestinyBase {
  constructor (game) {
    super(game, "Figure of Destiny", "Launch Parties", "PLPA");
  }
}

module.exports = FigureofDestiny;
