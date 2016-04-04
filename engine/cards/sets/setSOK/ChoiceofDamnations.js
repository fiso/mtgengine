"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChoiceofDamnations extends Card {
  constructor(game) {
    super(game, "Choice of Damnations", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = ChoiceofDamnations;
