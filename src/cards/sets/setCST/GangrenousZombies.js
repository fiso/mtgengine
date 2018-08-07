"use strict";
const Constants = require ("../../../Constants");
const GangrenousZombiesBase = require("../setME2/GangrenousZombies");

class GangrenousZombies extends GangrenousZombiesBase {
  constructor (game) {
    super(game, "Gangrenous Zombies", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = GangrenousZombies;
