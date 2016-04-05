"use strict";
const Constants = require ("../../../Constants");
const AngelofSalvationBase = require("../setDDF/AngelofSalvation");

class AngelofSalvation extends AngelofSalvationBase {
  constructor(game) {
    super(game, "Angel of Salvation", "Future Sight", "FUT");
  }
}

module.exports = AngelofSalvation;
