"use strict";
const Constants = require ("../../../Constants");
const FreshMeatBase = require("../setCMA/FreshMeat");

class FreshMeat extends FreshMeatBase {
  constructor (game) {
    super(game, "Fresh Meat", "Commander 2014", "C14");
  }
}

module.exports = FreshMeat;
