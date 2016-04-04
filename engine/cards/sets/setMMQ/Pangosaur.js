"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Pangosaur extends Card {
  constructor(game) {
    super(game, "Pangosaur", "Mercadian Masques", "MMQ");
  }
}

module.exports = Pangosaur;
