"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TawnossWeaponryBase = require("../setATQ/TawnossWeaponry.js");

class TawnossWeaponry extends TawnossWeaponryBase {
  constructor(game) {
    super(game, "Tawnos's Weaponry", "Fifth Edition", "5ED");
  }
}

module.exports = TawnossWeaponry;
