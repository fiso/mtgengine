"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RansackBase = require("../setS99/Ransack.js");

class Ransack extends RansackBase {
  constructor(game) {
    super(game, "Ransack", "Stronghold", "STH");
  }
}

module.exports = Ransack;
