"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BloodoftheMartyrBase = require("../setCHR/BloodoftheMartyr.js");

class BloodoftheMartyr extends BloodoftheMartyrBase {
  constructor(game) {
    super(game, "Blood of the Martyr", "The Dark", "DRK");
  }
}

module.exports = BloodoftheMartyr;
