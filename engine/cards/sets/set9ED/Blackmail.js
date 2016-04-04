"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Blackmail extends Card {
  constructor(game) {
    super(game, "Blackmail", "Ninth Edition", "9ED");
  }
}

module.exports = Blackmail;
