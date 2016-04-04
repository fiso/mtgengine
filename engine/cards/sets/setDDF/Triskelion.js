"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TriskelionBase = require("../setATQ/Triskelion.js");

class Triskelion extends TriskelionBase {
  constructor(game) {
    super(game, "Triskelion", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = Triskelion;
