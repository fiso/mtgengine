"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DenizenoftheDeep extends Card {
  constructor(game) {
    super(game, "Denizen of the Deep", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = DenizenoftheDeep;
