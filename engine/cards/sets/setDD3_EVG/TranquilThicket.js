"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TranquilThicketBase = require("../setARC/TranquilThicket.js");

class TranquilThicket extends TranquilThicketBase {
  constructor(game) {
    super(game, "Tranquil Thicket", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = TranquilThicket;
