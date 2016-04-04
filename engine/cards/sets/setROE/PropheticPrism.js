"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PropheticPrismBase = require("../setGTC/PropheticPrism.js");

class PropheticPrism extends PropheticPrismBase {
  constructor(game) {
    super(game, "Prophetic Prism", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = PropheticPrism;
