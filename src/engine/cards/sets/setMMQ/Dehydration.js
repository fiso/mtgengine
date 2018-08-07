"use strict";
const Constants = require ("../../../Constants");
const DehydrationBase = require("../set10E/Dehydration");

class Dehydration extends DehydrationBase {
  constructor (game) {
    super(game, "Dehydration", "Mercadian Masques", "MMQ");
  }
}

module.exports = Dehydration;
