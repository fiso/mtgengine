"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Justice extends Card {
  constructor(game) {
    super(game, "Justice", "Fifth Edition", "5ED");
  }
}

module.exports = Justice;
