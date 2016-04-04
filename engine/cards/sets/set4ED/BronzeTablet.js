"use strict";
const Constants = require ("../../../Constants");
const BronzeTabletBase = require("../setATQ/BronzeTablet");

class BronzeTablet extends BronzeTabletBase {
  constructor(game) {
    super(game, "Bronze Tablet", "Fourth Edition", "4ED");
  }
}

module.exports = BronzeTablet;
