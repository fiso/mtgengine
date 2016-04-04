"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JeskaiWindscout extends Card {
  constructor(game) {
    super(game, "Jeskai Windscout", "Khans of Tarkir", "KTK");
  }
}

module.exports = JeskaiWindscout;
