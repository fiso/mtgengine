"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Redirect extends Card {
  constructor(game) {
    super(game, "Redirect", "Magic 2011", "M11");
  }
}

module.exports = Redirect;
