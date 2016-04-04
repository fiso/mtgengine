"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DakmorPlague extends Card {
  constructor(game) {
    super(game, "Dakmor Plague", "Masters Edition IV", "ME4");
  }
}

module.exports = DakmorPlague;
