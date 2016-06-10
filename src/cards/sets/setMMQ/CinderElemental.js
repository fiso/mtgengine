"use strict";
const Constants = require ("../../../Constants");
const CinderElementalBase = require("../setGTC/CinderElemental");

class CinderElemental extends CinderElementalBase {
  constructor (game) {
    super(game, "Cinder Elemental", "Mercadian Masques", "MMQ");
  }
}

module.exports = CinderElemental;
