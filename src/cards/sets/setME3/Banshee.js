"use strict";
const Constants = require ("../../../Constants");
const BansheeBase = require("../setCHR/Banshee");

class Banshee extends BansheeBase {
  constructor (game) {
    super(game, "Banshee", "Masters Edition III", "ME3");
  }
}

module.exports = Banshee;
