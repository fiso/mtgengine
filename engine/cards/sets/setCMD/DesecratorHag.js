"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DesecratorHagBase = require("../setEVE/DesecratorHag.js");

class DesecratorHag extends DesecratorHagBase {
  constructor(game) {
    super(game, "Desecrator Hag", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = DesecratorHag;
