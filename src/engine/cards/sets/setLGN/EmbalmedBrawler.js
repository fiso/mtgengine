"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EmbalmedBrawler extends UnimplementedCard {
  constructor (game) {
    super(game, "Embalmed Brawler", "Legions", "LGN");
  }
}

module.exports = EmbalmedBrawler;
