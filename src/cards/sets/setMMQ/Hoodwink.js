"use strict";
const Constants = require ("../../../Constants");
const HoodwinkBase = require("../setPRM/Hoodwink");

class Hoodwink extends HoodwinkBase {
  constructor (game) {
    super(game, "Hoodwink", "Mercadian Masques", "MMQ");
  }
}

module.exports = Hoodwink;
