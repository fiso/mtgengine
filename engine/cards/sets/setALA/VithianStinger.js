"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VithianStingerBase = require("../setDDK/VithianStinger.js");

class VithianStinger extends VithianStingerBase {
  constructor(game) {
    super(game, "Vithian Stinger", "Shards of Alara", "ALA");
  }
}

module.exports = VithianStinger;
