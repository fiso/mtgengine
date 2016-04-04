"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Karstoderm extends Card {
  constructor(game) {
    super(game, "Karstoderm", "Darksteel", "DST");
  }
}

module.exports = Karstoderm;
