"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CinderElementalBase = require("../setGTC/CinderElemental.js");

class CinderElemental extends CinderElementalBase {
  constructor(game) {
    super(game, "Cinder Elemental", "Planechase", "HOP");
  }
}

module.exports = CinderElemental;
