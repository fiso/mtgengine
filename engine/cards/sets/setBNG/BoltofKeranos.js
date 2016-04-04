"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BoltofKeranos extends Card {
  constructor(game) {
    super(game, "Bolt of Keranos", "Born of the Gods", "BNG");
  }
}

module.exports = BoltofKeranos;
