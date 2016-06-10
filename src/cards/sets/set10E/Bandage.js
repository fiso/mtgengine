"use strict";
const Constants = require ("../../../Constants");
const BandageBase = require("../setSTH/Bandage");

class Bandage extends BandageBase {
  constructor (game) {
    super(game, "Bandage", "Tenth Edition", "10E");
  }
}

module.exports = Bandage;
