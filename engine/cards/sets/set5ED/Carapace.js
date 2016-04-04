"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Carapace extends Card {
  constructor(game) {
    super(game, "Carapace", "Fifth Edition", "5ED");
  }
}

module.exports = Carapace;
