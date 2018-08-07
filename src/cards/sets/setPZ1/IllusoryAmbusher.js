"use strict";
const Constants = require ("../../../Constants");
const IllusoryAmbusherBase = require("../setIMA/IllusoryAmbusher");

class IllusoryAmbusher extends IllusoryAmbusherBase {
  constructor (game) {
    super(game, "Illusory Ambusher", "Legendary Cube", "PZ1");
  }
}

module.exports = IllusoryAmbusher;
