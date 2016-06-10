"use strict";
const Constants = require ("../../../Constants");
const ArmisticeBase = require("../setC14/Armistice");

class Armistice extends ArmisticeBase {
  constructor (game) {
    super(game, "Armistice", "Mercadian Masques", "MMQ");
  }
}

module.exports = Armistice;
