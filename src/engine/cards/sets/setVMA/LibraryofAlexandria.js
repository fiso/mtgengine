"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LibraryofAlexandria extends UnimplementedCard {
  constructor (game) {
    super(game, "Library of Alexandria", "Vintage Masters", "VMA");
  }
}

module.exports = LibraryofAlexandria;
