"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RallythePeasants extends Card {
  constructor(game) {
    super(game, "Rally the Peasants", "Innistrad", "ISD");
  }
}

module.exports = RallythePeasants;
