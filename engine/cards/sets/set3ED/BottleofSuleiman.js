"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BottleofSuleimanBase = require("../setARN/BottleofSuleiman.js");

class BottleofSuleiman extends BottleofSuleimanBase {
  constructor(game) {
    super(game, "Bottle of Suleiman", "Revised Edition", "3ED");
  }
}

module.exports = BottleofSuleiman;
