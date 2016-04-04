"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FirebreathingBase = require("../set6ED/Firebreathing.js");

class Firebreathing extends FirebreathingBase {
  constructor(game) {
    super(game, "Firebreathing", "Magic 2010", "M10");
  }
}

module.exports = Firebreathing;
