"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RimewindCryomancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Rimewind Cryomancer", "Coldsnap", "CSP");
  }
}

module.exports = RimewindCryomancer;
