"use strict";
const Constants = require ("../../../Constants");
const FreshMeatBase = require("../setC14/FreshMeat");

class FreshMeat extends FreshMeatBase {
  constructor (game) {
    super(game, "Fresh Meat", "New Phyrexia", "NPH");
  }
}

module.exports = FreshMeat;
