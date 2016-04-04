"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WiltLeafCavaliersBase = require("../setDDG/WiltLeafCavaliers.js");

class WiltLeafCavaliers extends WiltLeafCavaliersBase {
  constructor(game) {
    super(game, "Wilt-Leaf Cavaliers", "Shadowmoor", "SHM");
  }
}

module.exports = WiltLeafCavaliers;
