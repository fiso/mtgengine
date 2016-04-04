"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AngelofSalvationBase = require("../setDDF/AngelofSalvation.js");

class AngelofSalvation extends AngelofSalvationBase {
  constructor(game) {
    super(game, "Angel of Salvation", "Future Sight", "FUT");
  }
}

module.exports = AngelofSalvation;
