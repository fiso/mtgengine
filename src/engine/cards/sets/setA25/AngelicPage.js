"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelicPage extends UnimplementedCard {
  constructor (game) {
    super(game, "Angelic Page", "Masters 25", "A25");
  }
}

module.exports = AngelicPage;
