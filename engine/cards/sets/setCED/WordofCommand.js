"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WordofCommand extends Card {
  constructor(game) {
    super(game, "Word of Command", "Collector's Edition", "CED");
  }
}

module.exports = WordofCommand;
