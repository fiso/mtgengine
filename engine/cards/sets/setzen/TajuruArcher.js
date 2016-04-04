"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TajuruArcherBase = require("../setDDP/TajuruArcher.js");

class TajuruArcher extends TajuruArcherBase {
  constructor(game) {
    super(game, "Tajuru Archer", "Zendikar", "ZEN");
  }
}

module.exports = TajuruArcher;
