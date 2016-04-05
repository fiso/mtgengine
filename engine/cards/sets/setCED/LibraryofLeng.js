"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LibraryofLeng extends UnimplementedCard {
  constructor(game) {
    super(game, "Library of Leng", "Collector's Edition", "CED");
  }
}

module.exports = LibraryofLeng;
