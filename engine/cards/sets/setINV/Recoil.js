"use strict";
const Constants = require ("../../../Constants");
const RecoilBase = require("../setDDH/Recoil");

class Recoil extends RecoilBase {
  constructor(game) {
    super(game, "Recoil", "Invasion", "INV");
  }
}

module.exports = Recoil;
