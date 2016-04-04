"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TrollhideBase = require("../setM12/Trollhide.js");

class Trollhide extends TrollhideBase {
  constructor(game) {
    super(game, "Trollhide", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Trollhide;
