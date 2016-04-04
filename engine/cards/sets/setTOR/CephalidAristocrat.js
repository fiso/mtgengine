"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CephalidAristocrat extends Card {
  constructor(game) {
    super(game, "Cephalid Aristocrat", "Torment", "TOR");
  }
}

module.exports = CephalidAristocrat;
