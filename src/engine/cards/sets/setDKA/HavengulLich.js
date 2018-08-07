"use strict";
const Constants = require ("../../../Constants");
const HavengulLichBase = require("../setC17/HavengulLich");

class HavengulLich extends HavengulLichBase {
  constructor (game) {
    super(game, "Havengul Lich", "Dark Ascension", "DKA");
  }
}

module.exports = HavengulLich;
