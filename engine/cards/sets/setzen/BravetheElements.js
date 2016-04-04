"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BravetheElementsBase = require("../setC14/BravetheElements.js");

class BravetheElements extends BravetheElementsBase {
  constructor(game) {
    super(game, "Brave the Elements", "Zendikar", "ZEN");
  }
}

module.exports = BravetheElements;
