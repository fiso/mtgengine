"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PlaguedRusalkaBase = require("../setDDJ/PlaguedRusalka.js");

class PlaguedRusalka extends PlaguedRusalkaBase {
  constructor(game) {
    super(game, "Plagued Rusalka", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = PlaguedRusalka;
