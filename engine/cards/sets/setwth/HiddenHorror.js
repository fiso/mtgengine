"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HiddenHorrorBase = require("../set6ED/HiddenHorror.js");

class HiddenHorror extends HiddenHorrorBase {
  constructor(game) {
    super(game, "Hidden Horror", "Weatherlight", "WTH");
  }
}

module.exports = HiddenHorror;
