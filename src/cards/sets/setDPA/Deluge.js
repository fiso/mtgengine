"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Deluge extends UnimplementedCard {
  constructor (game) {
    super(game, "Deluge", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = Deluge;
