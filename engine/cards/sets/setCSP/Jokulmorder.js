"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Jokulmorder extends Card {
  constructor(game) {
    super(game, "Jokulmorder", "Coldsnap", "CSP");
  }
}

module.exports = Jokulmorder;
