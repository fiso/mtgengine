"use strict";
const Constants = require ("../../../Constants");
const WiltLeafCavaliersBase = require("../setDDG/WiltLeafCavaliers");

class WiltLeafCavaliers extends WiltLeafCavaliersBase {
  constructor(game) {
    super(game, "Wilt-Leaf Cavaliers", "Gateway", "pGTW");
  }
}

module.exports = WiltLeafCavaliers;
