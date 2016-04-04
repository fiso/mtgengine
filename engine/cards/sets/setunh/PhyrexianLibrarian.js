"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhyrexianLibrarian extends Card {
  constructor(game) {
    super(game, "Phyrexian Librarian", "Unhinged", "UNH");
  }
}

module.exports = PhyrexianLibrarian;
