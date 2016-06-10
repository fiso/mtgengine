"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LibraryofLatNam extends UnimplementedCard {
  constructor (game) {
    super(game, "Library of Lat-Nam", "Alliances", "ALL");
  }
}

module.exports = LibraryofLatNam;
