"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FigureofDestinyBase = require("../setDDL/FigureofDestiny.js");

class FigureofDestiny extends FigureofDestinyBase {
  constructor(game) {
    super(game, "Figure of Destiny", "Eventide", "EVE");
  }
}

module.exports = FigureofDestiny;
