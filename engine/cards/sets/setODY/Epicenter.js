"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Epicenter extends Card {
  constructor(game) {
    super(game, "Epicenter", "Odyssey", "ODY");
  }
}

module.exports = Epicenter;
