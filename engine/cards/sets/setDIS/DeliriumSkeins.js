"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeliriumSkeins extends Card {
  constructor(game) {
    super(game, "Delirium Skeins", "Dissension", "DIS");
  }
}

module.exports = DeliriumSkeins;
