"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GangrenousZombiesBase = require("../setCST/GangrenousZombies.js");

class GangrenousZombies extends GangrenousZombiesBase {
  constructor(game) {
    super(game, "Gangrenous Zombies", "Masters Edition II", "ME2");
  }
}

module.exports = GangrenousZombies;
