"use strict";
const Constants = require ("../../../Constants");
const SeverSoulBase = require("../setPHUK/SeverSoul");

class SeverSoul extends SeverSoulBase {
  constructor (game) {
    super(game, "Sever Soul", "Mercadian Masques", "MMQ");
  }
}

module.exports = SeverSoul;
