"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BondsofFaithBase = require("../setDDQ/BondsofFaith.js");

class BondsofFaith extends BondsofFaithBase {
  constructor(game) {
    super(game, "Bonds of Faith", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = BondsofFaith;
