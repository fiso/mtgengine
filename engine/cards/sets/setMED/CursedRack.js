"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CursedRackBase = require("../setATQ/CursedRack.js");

class CursedRack extends CursedRackBase {
  constructor(game) {
    super(game, "Cursed Rack", "Masters Edition", "MED");
  }
}

module.exports = CursedRack;
