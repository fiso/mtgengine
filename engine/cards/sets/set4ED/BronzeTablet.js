"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BronzeTabletBase = require("../setATQ/BronzeTablet.js");

class BronzeTablet extends BronzeTabletBase {
  constructor(game) {
    super(game, "Bronze Tablet", "Fourth Edition", "4ED");
  }
}

module.exports = BronzeTablet;
