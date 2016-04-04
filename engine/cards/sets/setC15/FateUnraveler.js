"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FateUnravelerBase = require("../setBNG/FateUnraveler.js");

class FateUnraveler extends FateUnravelerBase {
  constructor(game) {
    super(game, "Fate Unraveler", "Commander 2015", "C15");
  }
}

module.exports = FateUnraveler;
