"use strict";
const Constants = require ("../../../Constants");
const LoxodonMysticBase = require("../set10E/LoxodonMystic");

class LoxodonMystic extends LoxodonMysticBase {
  constructor (game) {
    super(game, "Loxodon Mystic", "Darksteel", "DST");
  }
}

module.exports = LoxodonMystic;
