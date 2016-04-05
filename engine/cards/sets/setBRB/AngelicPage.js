"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelicPage extends UnimplementedCard {
  constructor(game) {
    super(game, "Angelic Page", "Battle Royale Box Set", "BRB");
  }
}

module.exports = AngelicPage;
