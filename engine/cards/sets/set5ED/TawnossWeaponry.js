"use strict";
const Constants = require ("../../../Constants");
const TawnossWeaponryBase = require("../setATQ/TawnossWeaponry");

class TawnossWeaponry extends TawnossWeaponryBase {
  constructor(game) {
    super(game, "Tawnos's Weaponry", "Fifth Edition", "5ED");
  }
}

module.exports = TawnossWeaponry;
