"use strict";
const Constants = require ("../../../Constants");
const BansheeBase = require("../setME3/Banshee");

class Banshee extends BansheeBase {
  constructor (game) {
    super(game, "Banshee", "Chronicles", "CHR");
  }
}

module.exports = Banshee;
