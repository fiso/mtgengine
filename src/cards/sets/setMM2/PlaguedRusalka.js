"use strict";
const Constants = require ("../../../Constants");
const PlaguedRusalkaBase = require("../setDDJ/PlaguedRusalka");

class PlaguedRusalka extends PlaguedRusalkaBase {
  constructor (game) {
    super(game, "Plagued Rusalka", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = PlaguedRusalka;
