"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HootingMandrills extends Card {
  constructor(game) {
    super(game, "Hooting Mandrills", "Khans of Tarkir", "KTK");
  }
}

module.exports = HootingMandrills;
