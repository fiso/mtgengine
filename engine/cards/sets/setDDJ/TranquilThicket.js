"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TranquilThicketBase = require("../setARC/TranquilThicket.js");

class TranquilThicket extends TranquilThicketBase {
  constructor(game) {
    super(game, "Tranquil Thicket", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = TranquilThicket;
