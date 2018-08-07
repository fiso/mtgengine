"use strict";
const Constants = require ("../../../Constants");
const NahiritheLithomancerBase = require("../setPZ1/NahiritheLithomancer");

class NahiritheLithomancer extends NahiritheLithomancerBase {
  constructor (game) {
    super(game, "Nahiri, the Lithomancer", "Commander 2014 Oversized", "OC14");
  }
}

module.exports = NahiritheLithomancer;
