"use strict";
const Constants = require ("../../../Constants");
const PunishingFireBase = require("../setPZ1/PunishingFire");

class PunishingFire extends PunishingFireBase {
  constructor (game) {
    super(game, "Punishing Fire", "Commander 2011", "CMD");
  }
}

module.exports = PunishingFire;
