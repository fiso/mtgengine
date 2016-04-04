"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LibraryofLatNam extends Card {
  constructor(game) {
    super(game, "Library of Lat-Nam", "Alliances", "ALL");
  }
}

module.exports = LibraryofLatNam;
