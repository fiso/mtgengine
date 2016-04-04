"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LibraryofAlexandria extends Card {
  constructor(game) {
    super(game, "Library of Alexandria", "Arabian Nights", "ARN");
  }
}

module.exports = LibraryofAlexandria;
