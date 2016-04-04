"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JaradGolgariLichLordBase = require("../setC15/JaradGolgariLichLord.js");

class JaradGolgariLichLord extends JaradGolgariLichLordBase {
  constructor(game) {
    super(game, "Jarad, Golgari Lich Lord", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = JaradGolgariLichLord;
