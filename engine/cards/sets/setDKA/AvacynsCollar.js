"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvacynsCollar extends Card {
  constructor(game) {
    super(game, "Avacyn's Collar", "Dark Ascension", "DKA");
  }
}

module.exports = AvacynsCollar;
