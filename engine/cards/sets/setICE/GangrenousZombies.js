"use strict";
const Constants = require ("../../../Constants");
const GangrenousZombiesBase = require("../setCST/GangrenousZombies");

class GangrenousZombies extends GangrenousZombiesBase {
  constructor(game) {
    super(game, "Gangrenous Zombies", "Ice Age", "ICE");
  }
}

module.exports = GangrenousZombies;
