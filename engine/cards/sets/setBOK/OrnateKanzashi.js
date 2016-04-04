"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrnateKanzashi extends Card {
  constructor(game) {
    super(game, "Ornate Kanzashi", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = OrnateKanzashi;
