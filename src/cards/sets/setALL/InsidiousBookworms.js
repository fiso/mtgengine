"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InsidiousBookworms extends UnimplementedCard {
  constructor (game) {
    super(game, "Insidious Bookworms", "Alliances", "ALL");
  }
}

module.exports = InsidiousBookworms;
