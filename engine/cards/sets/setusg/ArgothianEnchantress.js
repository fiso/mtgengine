"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArgothianEnchantressBase = require("../setpJGP/ArgothianEnchantress.js");

class ArgothianEnchantress extends ArgothianEnchantressBase {
  constructor(game) {
    super(game, "Argothian Enchantress", "Urza's Saga", "USG");
  }
}

module.exports = ArgothianEnchantress;
