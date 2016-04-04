"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LordofthePit extends Card {
  constructor(game) {
    super(game, "Lord of the Pit", "Collector's Edition", "CED");
  }
}

module.exports = LordofthePit;
