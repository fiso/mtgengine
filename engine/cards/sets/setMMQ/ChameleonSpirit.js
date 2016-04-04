"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChameleonSpirit extends Card {
  constructor(game) {
    super(game, "Chameleon Spirit", "Mercadian Masques", "MMQ");
  }
}

module.exports = ChameleonSpirit;
