"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RimewindCryomancer extends Card {
  constructor(game) {
    super(game, "Rimewind Cryomancer", "Coldsnap", "CSP");
  }
}

module.exports = RimewindCryomancer;
