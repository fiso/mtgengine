"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cancel extends UnimplementedCard {
  constructor (game) {
    super(game, "Cancel", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = Cancel;
