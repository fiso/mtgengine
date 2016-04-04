"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KazanduRefugeBase = require("../setARC/KazanduRefuge.js");

class KazanduRefuge extends KazanduRefugeBase {
  constructor(game) {
    super(game, "Kazandu Refuge", "Commander 2013 Edition", "C13");
  }
}

module.exports = KazanduRefuge;
