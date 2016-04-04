"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MindRavel extends Card {
  constructor(game) {
    super(game, "Mind Ravel", "Fifth Edition", "5ED");
  }
}

module.exports = MindRavel;
