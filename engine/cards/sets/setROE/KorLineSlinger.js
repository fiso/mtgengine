"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KorLineSlinger extends Card {
  constructor(game) {
    super(game, "Kor Line-Slinger", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = KorLineSlinger;
