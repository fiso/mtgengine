"use strict";
const Constants = require ("../../../Constants");
const TawnossWeaponryBase = require("../setATQ/TawnossWeaponry");

class TawnossWeaponry extends TawnossWeaponryBase {
  constructor (game) {
    super(game, "Tawnos's Weaponry", "Masters Edition IV", "ME4");
  }
}

module.exports = TawnossWeaponry;
