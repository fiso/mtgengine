"use strict";
const Constants = require ("../../../Constants");
const HeraldofAnafenzaBase = require("../setKTK/HeraldofAnafenza");

class HeraldofAnafenza extends HeraldofAnafenzaBase {
  constructor (game) {
    super(game, "Herald of Anafenza", "Khans of Tarkir Promos", "PKTK");
  }
}

module.exports = HeraldofAnafenza;
