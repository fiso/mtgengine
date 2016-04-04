"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VoidmageApprenticeBase = require("../setDD3_JVC/VoidmageApprentice.js");

class VoidmageApprentice extends VoidmageApprenticeBase {
  constructor(game) {
    super(game, "Voidmage Apprentice", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = VoidmageApprentice;
