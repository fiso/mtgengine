"use strict";
const Constants = require ("../../../Constants");
const PunishingFireBase = require("../setPZ1/PunishingFire");

class PunishingFire extends PunishingFireBase {
  constructor (game) {
    super(game, "Punishing Fire", "Zendikar", "ZEN");
  }
}

module.exports = PunishingFire;
