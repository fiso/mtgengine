"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HellcarverDemon extends Card {
  constructor(game) {
    super(game, "Hellcarver Demon", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = HellcarverDemon;
