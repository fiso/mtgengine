"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KazanduRefugeBase = require("../setARC/KazanduRefuge.js");

class KazanduRefuge extends KazanduRefugeBase {
  constructor(game) {
    super(game, "Kazandu Refuge", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = KazanduRefuge;
