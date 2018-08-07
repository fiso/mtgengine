"use strict";
const Constants = require ("../../../Constants");
const BloodoftheMartyrBase = require("../setCHR/BloodoftheMartyr");

class BloodoftheMartyr extends BloodoftheMartyrBase {
  constructor (game) {
    super(game, "Blood of the Martyr", "The Dark", "DRK");
  }
}

module.exports = BloodoftheMartyr;
