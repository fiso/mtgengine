"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DenizenoftheDeep extends UnimplementedCard {
  constructor(game) {
    super(game, "Denizen of the Deep", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = DenizenoftheDeep;
