"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MesaEnchantressBase = require("../setC15/MesaEnchantress.js");

class MesaEnchantress extends MesaEnchantressBase {
  constructor(game) {
    super(game, "Mesa Enchantress", "Planar Chaos", "PLC");
  }
}

module.exports = MesaEnchantress;
