"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JeskaiCharm extends Card {
  constructor(game) {
    super(game, "Jeskai Charm", "Khans of Tarkir", "KTK");
  }
}

module.exports = JeskaiCharm;
