"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const YavimayaEnchantressBase = require("../set8ED/YavimayaEnchantress.js");

class YavimayaEnchantress extends YavimayaEnchantressBase {
  constructor(game) {
    super(game, "Yavimaya Enchantress", "Seventh Edition", "7ED");
  }
}

module.exports = YavimayaEnchantress;
