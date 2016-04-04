"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BearUmbra extends Card {
  constructor(game) {
    super(game, "Bear Umbra", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = BearUmbra;
