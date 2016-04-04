"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const YavimayaEnchantressBase = require("../set8ED/YavimayaEnchantress.js");

class YavimayaEnchantress extends YavimayaEnchantressBase {
  constructor(game) {
    super(game, "Yavimaya Enchantress", "Ninth Edition", "9ED");
  }
}

module.exports = YavimayaEnchantress;
