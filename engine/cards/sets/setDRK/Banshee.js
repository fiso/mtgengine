"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BansheeBase = require("../setCHR/Banshee.js");

class Banshee extends BansheeBase {
  constructor(game) {
    super(game, "Banshee", "The Dark", "DRK");
  }
}

module.exports = Banshee;
