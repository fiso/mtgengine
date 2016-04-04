"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Amnesia extends Card {
  constructor(game) {
    super(game, "Amnesia", "Masters Edition", "MED");
  }
}

module.exports = Amnesia;
