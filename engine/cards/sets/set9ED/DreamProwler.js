"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DreamProwler extends Card {
  constructor(game) {
    super(game, "Dream Prowler", "Ninth Edition", "9ED");
  }
}

module.exports = DreamProwler;
