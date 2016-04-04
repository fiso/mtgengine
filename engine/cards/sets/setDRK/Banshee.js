"use strict";
const Constants = require ("../../../Constants");
const BansheeBase = require("../setCHR/Banshee");

class Banshee extends BansheeBase {
  constructor(game) {
    super(game, "Banshee", "The Dark", "DRK");
  }
}

module.exports = Banshee;
