"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FreshMeatBase = require("../setC14/FreshMeat.js");

class FreshMeat extends FreshMeatBase {
  constructor(game) {
    super(game, "Fresh Meat", "New Phyrexia", "NPH");
  }
}

module.exports = FreshMeat;
