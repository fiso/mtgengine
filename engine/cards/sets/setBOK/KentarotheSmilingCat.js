"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KentarotheSmilingCat extends Card {
  constructor(game) {
    super(game, "Kentaro, the Smiling Cat", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = KentarotheSmilingCat;
