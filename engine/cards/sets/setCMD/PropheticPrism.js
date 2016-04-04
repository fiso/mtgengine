"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PropheticPrismBase = require("../setGTC/PropheticPrism.js");

class PropheticPrism extends PropheticPrismBase {
  constructor(game) {
    super(game, "Prophetic Prism", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = PropheticPrism;
