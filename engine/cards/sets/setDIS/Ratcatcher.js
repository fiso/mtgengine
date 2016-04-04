"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Ratcatcher extends Card {
  constructor(game) {
    super(game, "Ratcatcher", "Dissension", "DIS");
  }
}

module.exports = Ratcatcher;
