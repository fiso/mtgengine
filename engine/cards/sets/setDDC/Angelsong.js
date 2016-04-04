"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AngelsongBase = require("../setDD3_DVD/Angelsong.js");

class Angelsong extends AngelsongBase {
  constructor(game) {
    super(game, "Angelsong", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = Angelsong;
