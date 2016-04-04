"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DebilitatingInjury extends Card {
  constructor(game) {
    super(game, "Debilitating Injury", "Khans of Tarkir", "KTK");
  }
}

module.exports = DebilitatingInjury;
