"use strict";
const Constants = require ("../../../Constants");
const PropheticPrismBase = require("../setA25/PropheticPrism");

class PropheticPrism extends PropheticPrismBase {
  constructor (game) {
    super(game, "Prophetic Prism", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = PropheticPrism;
