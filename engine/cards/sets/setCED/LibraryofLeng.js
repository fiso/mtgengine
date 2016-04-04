"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LibraryofLeng extends Card {
  constructor(game) {
    super(game, "Library of Leng", "Collector's Edition", "CED");
  }
}

module.exports = LibraryofLeng;
