"use strict";
const Constants = require ("../../../Constants");
const KiyomaroFirsttoStandBase = require("../setSOK/KiyomaroFirsttoStand");

class KiyomaroFirsttoStand extends KiyomaroFirsttoStandBase {
  constructor (game) {
    super(game, "Kiyomaro, First to Stand", "Magic Online Promos", "PRM");
  }
}

module.exports = KiyomaroFirsttoStand;
