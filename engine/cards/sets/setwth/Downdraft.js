"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Downdraft extends Card {
  constructor(game) {
    super(game, "Downdraft", "Weatherlight", "WTH");
  }
}

module.exports = Downdraft;
