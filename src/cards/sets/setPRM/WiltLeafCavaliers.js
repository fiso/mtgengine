"use strict";
const Constants = require ("../../../Constants");
const WiltLeafCavaliersBase = require("../setDDG/WiltLeafCavaliers");

class WiltLeafCavaliers extends WiltLeafCavaliersBase {
  constructor (game) {
    super(game, "Wilt-Leaf Cavaliers", "Magic Online Promos", "PRM");
  }
}

module.exports = WiltLeafCavaliers;
