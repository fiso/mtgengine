"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UnyieldingKrumar extends Card {
  constructor(game) {
    super(game, "Unyielding Krumar", "Khans of Tarkir", "KTK");
  }
}

module.exports = UnyieldingKrumar;
