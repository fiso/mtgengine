"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WordofBlasting extends Card {
  constructor(game) {
    super(game, "Word of Blasting", "Fifth Edition", "5ED");
  }
}

module.exports = WordofBlasting;
