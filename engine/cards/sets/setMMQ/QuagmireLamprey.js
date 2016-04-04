"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class QuagmireLamprey extends Card {
  constructor(game) {
    super(game, "Quagmire Lamprey", "Mercadian Masques", "MMQ");
  }
}

module.exports = QuagmireLamprey;
