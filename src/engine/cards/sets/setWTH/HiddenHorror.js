"use strict";
const Constants = require ("../../../Constants");
const HiddenHorrorBase = require("../setPD3/HiddenHorror");

class HiddenHorror extends HiddenHorrorBase {
  constructor (game) {
    super(game, "Hidden Horror", "Weatherlight", "WTH");
  }
}

module.exports = HiddenHorror;
