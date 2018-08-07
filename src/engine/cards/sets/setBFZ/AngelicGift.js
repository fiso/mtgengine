"use strict";
const Constants = require ("../../../Constants");
const AngelicGiftBase = require("../setBBD/AngelicGift");

class AngelicGift extends AngelicGiftBase {
  constructor (game) {
    super(game, "Angelic Gift", "Battle for Zendikar", "BFZ");
  }
}

module.exports = AngelicGift;
