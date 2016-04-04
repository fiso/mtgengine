"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PunishingFireBase = require("../setDDG/PunishingFire.js");

class PunishingFire extends PunishingFireBase {
  constructor(game) {
    super(game, "Punishing Fire", "Zendikar", "ZEN");
  }
}

module.exports = PunishingFire;
