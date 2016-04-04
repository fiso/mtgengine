"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RevokeExistence extends Card {
  constructor(game) {
    super(game, "Revoke Existence", "Born of the Gods", "BNG");
  }
}

module.exports = RevokeExistence;
