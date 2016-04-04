"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const YavimayaEnchantressBase = require("../set8ED/YavimayaEnchantress.js");

class YavimayaEnchantress extends YavimayaEnchantressBase {
  constructor(game) {
    super(game, "Yavimaya Enchantress", "Tenth Edition", "10E");
  }
}

module.exports = YavimayaEnchantress;
