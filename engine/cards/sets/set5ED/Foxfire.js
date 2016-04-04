"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Foxfire extends Card {
  constructor(game) {
    super(game, "Foxfire", "Fifth Edition", "5ED");
  }
}

module.exports = Foxfire;
