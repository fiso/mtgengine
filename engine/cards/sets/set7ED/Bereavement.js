"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Bereavement extends Card {
  constructor(game) {
    super(game, "Bereavement", "Seventh Edition", "7ED");
  }
}

module.exports = Bereavement;
