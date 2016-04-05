"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KitesailApprentice extends UnimplementedCard {
  constructor(game) {
    super(game, "Kitesail Apprentice", "Worldwake", "WWK");
  }
}

module.exports = KitesailApprentice;
