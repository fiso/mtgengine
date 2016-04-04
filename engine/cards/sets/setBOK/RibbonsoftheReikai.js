"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RibbonsoftheReikai extends Card {
  constructor(game) {
    super(game, "Ribbons of the Reikai", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = RibbonsoftheReikai;
