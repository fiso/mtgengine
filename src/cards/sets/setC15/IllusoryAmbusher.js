"use strict";
const Constants = require ("../../../Constants");
const IllusoryAmbusherBase = require("../setIMA/IllusoryAmbusher");

class IllusoryAmbusher extends IllusoryAmbusherBase {
  constructor (game) {
    super(game, "Illusory Ambusher", "Commander 2015", "C15");
  }
}

module.exports = IllusoryAmbusher;
