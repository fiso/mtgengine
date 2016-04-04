"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RecoilBase = require("../setDDH/Recoil.js");

class Recoil extends RecoilBase {
  constructor(game) {
    super(game, "Recoil", "Invasion", "INV");
  }
}

module.exports = Recoil;
