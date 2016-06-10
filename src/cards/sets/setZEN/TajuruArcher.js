"use strict";
const Constants = require ("../../../Constants");
const TajuruArcherBase = require("../setDDP/TajuruArcher");

class TajuruArcher extends TajuruArcherBase {
  constructor (game) {
    super(game, "Tajuru Archer", "Zendikar", "ZEN");
  }
}

module.exports = TajuruArcher;
