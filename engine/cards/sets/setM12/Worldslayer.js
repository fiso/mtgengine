"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Worldslayer extends Card {
  constructor(game) {
    super(game, "Worldslayer", "Magic 2012", "M12");
  }
}

module.exports = Worldslayer;
