"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BravetheElementsBase = require("../setC14/BravetheElements.js");

class BravetheElements extends BravetheElementsBase {
  constructor(game) {
    super(game, "Brave the Elements", "Magic 2014 Core Set", "M14");
  }
}

module.exports = BravetheElements;
