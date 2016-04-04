"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LordofTresserhorn extends Card {
  constructor(game) {
    super(game, "Lord of Tresserhorn", "Alliances", "ALL");
  }
}

module.exports = LordofTresserhorn;
