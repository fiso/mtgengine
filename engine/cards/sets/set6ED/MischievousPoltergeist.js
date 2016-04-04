"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MischievousPoltergeist extends Card {
  constructor(game) {
    super(game, "Mischievous Poltergeist", "Classic Sixth Edition", "6ED");
  }
}

module.exports = MischievousPoltergeist;
