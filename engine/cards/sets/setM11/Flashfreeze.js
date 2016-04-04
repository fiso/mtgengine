"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlashfreezeBase = require("../setCSP/Flashfreeze.js");

class Flashfreeze extends FlashfreezeBase {
  constructor(game) {
    super(game, "Flashfreeze", "Magic 2011", "M11");
  }
}

module.exports = Flashfreeze;
