"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MagistratesVeto extends Card {
  constructor(game) {
    super(game, "Magistrate's Veto", "Mercadian Masques", "MMQ");
  }
}

module.exports = MagistratesVeto;
