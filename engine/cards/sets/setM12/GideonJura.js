"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GideonJura extends Card {
  constructor(game) {
    super(game, "Gideon Jura", "Magic 2012", "M12");
  }
}

module.exports = GideonJura;
