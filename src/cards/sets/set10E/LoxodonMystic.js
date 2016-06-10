"use strict";
const Constants = require ("../../../Constants");
const LoxodonMysticBase = require("../setDST/LoxodonMystic");

class LoxodonMystic extends LoxodonMysticBase {
  constructor (game) {
    super(game, "Loxodon Mystic", "Tenth Edition", "10E");
  }
}

module.exports = LoxodonMystic;
