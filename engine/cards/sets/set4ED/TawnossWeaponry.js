"use strict";
const Constants = require ("../../../Constants");
const TawnossWeaponryBase = require("../setATQ/TawnossWeaponry");

class TawnossWeaponry extends TawnossWeaponryBase {
  constructor(game) {
    super(game, "Tawnos's Weaponry", "Fourth Edition", "4ED");
  }
}

module.exports = TawnossWeaponry;
