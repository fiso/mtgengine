"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TawnossWeaponryBase = require("../setATQ/TawnossWeaponry.js");

class TawnossWeaponry extends TawnossWeaponryBase {
  constructor(game) {
    super(game, "Tawnos's Weaponry", "Masters Edition IV", "ME4");
  }
}

module.exports = TawnossWeaponry;
