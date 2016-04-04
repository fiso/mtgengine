"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NotoriousThrong extends Card {
  constructor(game) {
    super(game, "Notorious Throng", "Morningtide", "MOR");
  }
}

module.exports = NotoriousThrong;
