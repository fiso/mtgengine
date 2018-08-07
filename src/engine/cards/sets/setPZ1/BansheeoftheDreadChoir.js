"use strict";
const Constants = require ("../../../Constants");
const BansheeoftheDreadChoirBase = require("../setCMA/BansheeoftheDreadChoir");

class BansheeoftheDreadChoir extends BansheeoftheDreadChoirBase {
  constructor (game) {
    super(game, "Banshee of the Dread Choir", "Legendary Cube", "PZ1");
  }
}

module.exports = BansheeoftheDreadChoir;
