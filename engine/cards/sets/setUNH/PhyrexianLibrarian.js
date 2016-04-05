"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianLibrarian extends UnimplementedCard {
  constructor(game) {
    super(game, "Phyrexian Librarian", "Unhinged", "UNH");
  }
}

module.exports = PhyrexianLibrarian;
