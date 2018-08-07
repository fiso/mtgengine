"use strict";
const Constants = require ("../../../Constants");
const BansheeoftheDreadChoirBase = require("../setCMA/BansheeoftheDreadChoir");

class BansheeoftheDreadChoir extends BansheeoftheDreadChoirBase {
  constructor (game) {
    super(game, "Banshee of the Dread Choir", "Commander 2015", "C15");
  }
}

module.exports = BansheeoftheDreadChoir;
