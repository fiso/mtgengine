"use strict";
const Constants = require ("../../../Constants");
const TawnossWeaponryBase = require("../setME4/TawnossWeaponry");

class TawnossWeaponry extends TawnossWeaponryBase {
  constructor (game) {
    super(game, "Tawnos's Weaponry", "Antiquities", "ATQ");
  }
}

module.exports = TawnossWeaponry;
