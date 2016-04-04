"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GulfSquid extends Card {
  constructor(game) {
    super(game, "Gulf Squid", "Prophecy", "PCY");
  }
}

module.exports = GulfSquid;
