"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KiyomaroFirsttoStandBase = require("../setpPRE/KiyomaroFirsttoStand.js");

class KiyomaroFirsttoStand extends KiyomaroFirsttoStandBase {
  constructor(game) {
    super(game, "Kiyomaro, First to Stand", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = KiyomaroFirsttoStand;
