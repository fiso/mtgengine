"use strict";
const Constants = require ("../../../Constants");
const ChartoothCougarBase = require("../setDD3_JVC/ChartoothCougar");

class ChartoothCougar extends ChartoothCougarBase {
  constructor (game) {
    super(game, "Chartooth Cougar", "Vintage Masters", "VMA");
  }
}

module.exports = ChartoothCougar;
