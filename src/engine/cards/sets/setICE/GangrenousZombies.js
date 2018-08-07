"use strict";
const Constants = require ("../../../Constants");
const GangrenousZombiesBase = require("../setME2/GangrenousZombies");

class GangrenousZombies extends GangrenousZombiesBase {
  constructor (game) {
    super(game, "Gangrenous Zombies", "Ice Age", "ICE");
  }
}

module.exports = GangrenousZombies;
