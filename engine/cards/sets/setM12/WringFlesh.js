"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WringFlesh extends Card {
  constructor(game) {
    super(game, "Wring Flesh", "Magic 2012", "M12");
  }
}

module.exports = WringFlesh;
