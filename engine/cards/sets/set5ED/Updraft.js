"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Updraft extends Card {
  constructor(game) {
    super(game, "Updraft", "Fifth Edition", "5ED");
  }
}

module.exports = Updraft;
