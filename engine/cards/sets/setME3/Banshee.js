"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BansheeBase = require("../setCHR/Banshee.js");

class Banshee extends BansheeBase {
  constructor(game) {
    super(game, "Banshee", "Masters Edition III", "ME3");
  }
}

module.exports = Banshee;
