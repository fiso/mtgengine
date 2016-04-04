"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Floodbringer extends Card {
  constructor(game) {
    super(game, "Floodbringer", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = Floodbringer;
