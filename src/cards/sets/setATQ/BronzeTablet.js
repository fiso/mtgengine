"use strict";
const Constants = require ("../../../Constants");
const BronzeTabletBase = require("../set4ED/BronzeTablet");

class BronzeTablet extends BronzeTabletBase {
  constructor (game) {
    super(game, "Bronze Tablet", "Antiquities", "ATQ");
  }
}

module.exports = BronzeTablet;
